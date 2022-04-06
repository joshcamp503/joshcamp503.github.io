// Returns a string, either 'mobile', 'tablet', or 'desktop'
// Used with product object, ie- product.image[useMediaSize()]
// Change images at media breakpoints

import { useState, useLayoutEffect } from "react";

export const useMediaSize = (func) => {
  // determine current device for initial state
  const getCurrentDevice = () => {
    const deviceWidth = window.innerWidth
    if(deviceWidth >= 1200) return 'desktop'
    if(deviceWidth >= 700) return 'tablet'
    return 'mobile'
  }

  // set default state
  const [mediaSize, setMediaSize] = useState(getCurrentDevice())

  // change state when browser size hits breakpoints
  useLayoutEffect(() => {
    // abort controller for synchronous state update
    let isMounted = true;
    // breakpoints
    const findMedia = () => {
      const queries = [
        '(max-width: 699px)', 
        '(min-width: 700px) and (max-width: 1199px)', 
        '(min-width: 1200px)'
      ]
      
      // returns first string from queries array that matches media query
      const currentMedia = queries.find(query => {
        return window.matchMedia(query).matches
      })

      // change state
      const changeMedia = (query) => {
        // abort if component is unmounted 
        if(!isMounted) return false
        switch (query) {
          case '(max-width: 699px)':
            setMediaSize('mobile')
            return
          case '(min-width: 700px) and (max-width: 1199px)':
            setMediaSize('tablet')
            return
          case '(min-width: 1200px)':
            func(false)
            setMediaSize('desktop')
            return
          default:
            setMediaSize('default')
            return
        }
      }

      // returns mediaQueryList object with "onchange" functionality
      // change state when "onchange" fires
      matchMedia(currentMedia).onchange = () => {
        const newMedia = queries.find(query => {
          return window.matchMedia(query).matches
        })
        changeMedia(newMedia)
      }
      // console.log(mediaSize)
    }

    findMedia()

    // toggle isMounted for abort control
    return () => {
      isMounted = false
    }

    }, [mediaSize, func])
  
  
  return mediaSize

};
