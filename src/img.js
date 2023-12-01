import ash from './slider/ash.jpg'
import baby from './slider/baby.jpg'
import brother from './slider/brother.jpg'
import brothers from './slider/brothers.jpg'
import bubba from './slider/bubba.jpg'
import bucs from './slider/bucs.jpg'
import butterfly from './slider/butterfly.jpg'
import cool from './slider/cool.jpg'
import croatia from './slider/croatia.jpg'
import daniel from './slider/daniel.jpg'
import dolphin from './slider/dolphin.jpg'
import eyes from './slider/eyes.jpg'
import family from './slider/family.jpg'
import friends from './slider/friends.jpg'
import gaggle from './slider/gaggle.jpg'
import gang from './slider/gang.jpg'
import goofs from './slider/goofs.jpg'
import goons from './slider/goons.jpg'
import grandpa from './slider/grandpa.jpg'
import max from './slider/max.jpg'
import momma from './slider/momma.jpg'
import monkey from './slider/monkey.jpg'
import pose from './slider/pose.jpg'
import puppet from './slider/puppet.jpg'
import shemk from './slider/shemk.jpg'
import siblings from './slider/siblings.jpg'
import sissy from './slider/sissy.jpg'
import skippin from './slider/skipping.jpg'
import stoic from './slider/stoic.jpg'
import strongTim from './slider/strongTim.jpg'
import sweetT from './slider/sweetT.jpg'
import thien from './slider/thienBday.jpg'
import thor from './slider/thor.jpg'
import turtle from './slider/turtle.jpg'
import water from './slider/water.jpg'
export default function buildImageSlider(){
    const names = [ash,baby,brother,brothers,bubba,bucs,butterfly,cool,croatia,daniel,dolphin,eyes,family,friends,gaggle,gang,goofs,grandpa,max,momma,monkey,pose,puppet,shemk,siblings,sissy,skippin,stoic,strongTim,thien,sweetT,thor,turtle,water]
    const main = document.querySelector('main')
    const slider = document.createElement('div')
    slider.classList.add('imgSlider')
    for(let i = 0; i<names.length;i++){
        const img = document.createElement('img')
        img.src = names[i]
        if(i%2==0){
            img.style.marginTop = '0'
            img.style.zIndex = 'auto'
        }else if(i%2!=0){
            img.style.marginTop = '8vh'
            img.style.zIndex = '2'
        }
        img.alt = 'myFamily/nature'
        slider.appendChild(img)
    }
    main.appendChild(slider)
}
 