import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor() { }
  // gotobottom() {
  //   document.querySelector("#secondpage")?.scrollIntoView({ behavior: "smooth", block: "start" });
  // }
  // gotobottom1() {
  //   document.querySelector("#thirdpage")?.scrollIntoView({ behavior: "smooth", block: "start" });
  // }
  // gotobottom2() {
  //   document.querySelector("#fourthpage")?.scrollIntoView({ behavior: "smooth", block: "start" });
  // }
  // gotobottom3() {
  //   document.querySelector("#fifthpage")?.scrollIntoView({ behavior: "smooth", block: "start" });
  // }
  // gotobottom4() {
  //   document.querySelector("#sixthpage")?.scrollIntoView({ behavior: "smooth", block: "start" });
  // }
  // gotobottom5(){
  //   document.querySelector("#seventhpage")?.scrollIntoView({behavior:"smooth",block:"start"});
  //     }
  title = ""
  aboutUs: any[] = [

    {
      "image": "assets/images/Icon_Set(11).png",
      "heading": "LMS Implementation",
      "paragraph": "Seamless integration of robust learning platforms for efficient knowledge delivery and employee growth."
    },
    {
      "image": "assets/images/Icon_Set(20).png",
      "heading": "Staff Augmentation",
      "paragraph": "On-demand expertise to elevate projects, adapt to demands, and enhance team capabilities."
    },
    {
      "image": "assets/images/Icon_Set(21).png",
      "heading": "Custom Development",
      "paragraph": "Tailored solutions powered by the latest technology, unlocking unique possibilities for growth and innovation."
    }

  ]

  staffAugmentation1: any[] = [

    {
      "image": "assets/images/Icon_Set.png",
      "heading": "Rapid Response",
      "paragraph": "Say goodbye to long recruitment cycles. We deliver skilled professionals on-demand, saving you valuable time."
    },
    {
      "image": "assets/images/Icon_Set(1).png",
      "heading": "Expert Insight",
      "paragraph": "Access specialized skills that precisely match your project requirements, ensuring optimal project outcomes."
    },
    {
      "image": "assets/images/Icon_Set(2).png",
      "heading": "Cost-Efficient",
      "paragraph": "No need to invest in full-time hires. Our service streamlines costs and maximizes your budget."
    },
    {
      "image": "assets/images/Icon_Set(3).png",
      "heading": "Flexibility",
      "paragraph": "Scale your team based on project needs. Our service adapts to your requirements, keeping you nimble."
    },
    {
      "image": "assets/images/Icon_Set(4).png",
      "heading": "Seamless Integration",
      "paragraph": "Augmented staff seamlessly collaborate with your team, fostering a cohesive and efficient work environment."
    },
    {
      "image": "assets/images/Icon_Set(5).png",
      "heading": "Reduced Burden",
      "paragraph": " We handle administrative tasks, so you can concentrate on strategic endeavors that drive your business forward."
    },



  ]

  card2: any[] = [
    {
      "image1": "assets/images/Icon_Set(6).png",
      "paragraph1": "We analyze your project needs and skill gaps."
    },
    {
      "image1": "assets/images/Icon_Set(7).png",
      "paragraph1": "We analyze your project needs and skill gaps."
    },
    {
      "image1": "assets/images/Icon_Set(8).png",
      "paragraph1": "We analyze your project needs and skill gaps."
    },
    {
      "image1": "assets/images/Icon_Set(9).png",
      "paragraph1": "We analyze your project needs and skill gaps."
    },
    {
      "image1": "assets/images/Icon_Set(10).png",
      "paragraph1": "We analyze your project needs and skill gaps."
    },
  ]


  CustomDevelopment: any[] = [

    {
      "image": "assets/images/Icon_Set(11).png",
      "heading": "RAPID DEVELOPMENT",
      "paragraph": "We use latest technology framework like React, Angular, etc to deliver our custom HTML5 courses."
    },
    {
      "image": "assets/images/Icon_Set(12).png",
      "heading": "MOBILE LEARNING",
      "paragraph": "Seamless access to course content on mobile devices, enhancing learning flexibility and convenience."
    },
    {
      "image": "assets/images/Icon_Set(13).png",
      "heading": "CUSTOM DEVELOPMENT",
      "paragraph": "We use latest technology framework like React, Angular, etc to deliver our custom HTML5 courses."
    },
    {
      "image": "assets/images/Icon_Set(15).png",
      "heading": "PPT TO ELEARNING",
      "paragraph": "Transform PowerPoint presentations into interactive eLearning modules for enhanced engagement."
    },
    {
      "image": "assets/images/Icon_Set(14).png",
      "heading": "FLASH TO HTML5",
      "paragraph": "Modernize legacy Flash-based content, converting it to HTML5 for compatibility and improved performance."
    },
    {
      "image": "assets/images/Icon_Set(16).png",
      "heading": "TRANSLATION",
      "paragraph": "Adapt eLearning content to global audiences by translating and localizing materials for cultural relevance."
    },
    {
      "image": "assets/images/Icon_Set(17).png",
      "heading": "OLD CONTENT CONVERSION",
      "paragraph": "Upgrade outdated eLearning materials to current formats, ensuring continued usability and effectiveness."
    },
    {
      "image": "assets/images/Icon_Set(18).png",
      "heading": "GAMIFICATION",
      "paragraph": "Integrate game elements into eLearning to boost motivation, participation, and learning outcomes."
    },
    {
      "image": "assets/images/Icon_Set(19).png",
      "heading": "BLENDED LEARNING",
      "paragraph": "Combine online and offline learning methods to create holistic educational experiences for learners."
    },
  ]

  homecard: any[] = [

    {
      "image": "assets/images/Icon_Set(11).png",
      "heading": "LMS Implementation",
      "paragraph": "Seamless integration of robust learning platforms for efficient knowledge delivery and employee growth."
    },
    {
      "image": "assets/images/Icon_Set(20).png",
      "heading": "Staff Augmentation",
      "paragraph": "On-demand expertise to elevate projects, adapt to demands, and enhance team capabilities."
    },
    {
      "image": "assets/images/Icon_Set(21).png",
      "heading": "Custom Development",
      "paragraph": "Tailored solutions powered by the latest technology, unlocking unique possibilities for growth and innovation."
    },
  ]


}
