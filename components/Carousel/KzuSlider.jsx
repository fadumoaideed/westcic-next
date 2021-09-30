import React from 'react'
import KzuSlider from 'kzu-slider'

function Carousel() {
   return (
      <div className="west-cic-slider">
         <KzuSlider
            height={400}
            // parallax
            auto
            duration={4000}
            contentPadding={{ left: 80, right: 80, top: 64, bottom: 64 }}
            contentWidth={60}
            transition={500}
            slides={[
               {
                  background: 'image1.jpeg',
                  title: 'Another Slider',
                  subtitle: 'another slider example',
                  content: 'This one is on auto mode ...',
                  buttons: [
                     {
                        title: 'Single Button',
                        onClick: () => {
                           alert('Clicked Single Button')
                        },
                        color: 'rgba(0,0,055,0.5)',
                        textColor: '#ffffff'
                     }
                  ],

                  contentColor: '#323232',
                  contentBg: 'rgba(255,255,255,0.6)',
                  shades: [
                     {
                        from: 'rgba(200, 0, 100, 0.5)',
                        to: 'rgba(0,234,189,0.5)',
                        angle: 90
                     }
                  ]
               },
               {
                  background: 'image2.jpeg',
                  title: 'Parallax Images',
                  content:
                     'This one has also padding settings for text content box',
                  buttons: [
                     {
                        title: 'Button 1',
                        onClick: () => {
                           alert('Clicked Button 1')
                        },
                        color: 'rgba(100,100,110,0.5)',
                        textColor: 'white'
                     }
                  ],
                  align: 'center',
                  contentColor: '#fefefe',
                  contentBg: 'rgba(100,100,250,0.6)',
                  shades: [
                     {
                        from: 'rgba(0, 0, 255, 0.5)',
                        to: 'rgba(255, 255, 255, 0.5)',
                        angle: 45
                     }
                  ]
               },
               {
                  background: 'image2.jpeg',
                  title: 'Parallax Images',
                  content:
                     'This one has also padding settings for text content box',
                  buttons: [
                     {
                        title: 'Button 1',
                        onClick: () => {
                           alert('Clicked Button 1')
                        },
                        color: 'rgba(100,100,110,0.5)',
                        textColor: 'white'
                     }
                  ],
                  align: 'center',
                  contentColor: '#fefefe',
                  contentBg: 'rgba(250,100,250,0.6)',
                  shades: [
                     {
                        from: 'rgba(0, 255, 255, 0.5)',
                        to: 'rgba(255, 255, 255, 0.5)',
                        angle: 45
                     }
                  ]
               }
            ]}
         />
      </div>
   )
}

export default Carousel
