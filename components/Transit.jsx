




"use client"

import { SwitchTransition, Transition } from 'react-transition-group'

import gsap from 'gsap'


import Hotincampus from "@/components/Hotincampus";
import Noneplayer from "@/components/navigation/Noneplayer";
import {Suspense }from 'react';



import  {useRouter} from 'next/navigation'

const transit = () => {
    const router = useRouter()
    const onPageEnter = (element) => {
        gsap.fromTo(
          element,
          {
            y: 50,
            autoAlpha: 0,
            ease: 'power3.out',
          },
          {
            y: 0,
            autoAlpha: 1,
            duration: 1,
            ease: 'power3.out',
          }
        )
      }
      const onPageExit = (element) => {
        gsap.fromTo(
          element,
          {
            y: 0,
            autoAlpha: 1,
            ease: 'power3.out',
          },
          {
            y: -50,
            autoAlpha: 0,
            duration: 0.5,
            ease: 'power3.inOut',
          }
        )
      }

  return (
    <div>
      {/* <Suspense> */}
      {/* <SwitchTransition>
            <Transition
            key={router.pathname}
            timeout={1000}
            in={true}
            onEnter={onPageEnter}
            // onEntering={onPageEnter}
            onExit={onPageExit}
            // onExited={onPageExit}
            mountOnEnter={true}
            unmountOnExit={true}
            > */}
              <div>
              <Noneplayer/>
              <Hotincampus/>

              </div>
             
            {/* </Transition>
        </SwitchTransition> */}
      {/* </Suspense> */}
      



    </div>
  )
}

export default transit