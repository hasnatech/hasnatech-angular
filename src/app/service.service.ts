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
      "paragraph1": "Analyze project needs, identify skill gaps accurately."
    },
    {
      "image1": "assets/images/Icon_Set(7).png",
      "paragraph1": "Customize staff plan to address specific requirements. "
    },
    {
      "image1": "assets/images/Icon_Set(8).png",
      "paragraph1": "Source skilled professionals, ensure expertise and experience. "
    },
    {
      "image1": "assets/images/Icon_Set(9).png",
      "paragraph1": "Ensure seamless integration, provide comprehensive onboarding. "
    },
    {
      "image1": "assets/images/Icon_Set(10).png",
      "paragraph1": "Maintain support, monitor performance, adjust strategy accordingly. "
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

  WebDevelopment: any[] = [

    {
      "image": "assets/images/Icon_Set(11).png",
      "heading": "UI/UX Design",
      "paragraph": "Crafting intuitive and visually appealing user experiences to enhance engagement and usability. "
    },
    {
      "image": "assets/images/Icon_Set(12).png",
      "heading": "Responsive Design",
      "paragraph": "Ensuring optimal viewing experience across a wide range of devices and screen sizes. "
    },
    {
      "image": "assets/images/Icon_Set(13).png",
      "heading": "Security Measures",
      "paragraph": "Implementing robust security protocols and measures to safeguard your web application from potential threats."
    },
    {
      "image": "assets/images/Icon_Set(15).png",
      "heading": "Frontend Development",
      "paragraph": "Utilizing React, Angular, and Next.js for engaging and responsive user interfaces."
    },
    {
      "image": "assets/images/Icon_Set(14).png",
      "heading": "Backend Development",
      "paragraph": "Expertise in Node.js, Python, C#, Laravel, and Nest.js for robust server-side solutions."
    },
    {
      "image": "assets/images/Icon_Set(16).png",
      "heading": "Mobile App Development",
      "paragraph": "Extending web functionality to mobile platforms with cross-platform app development."
    },
    {
      "image": "assets/images/Icon_Set(17).png",
      "heading": "Database Integration",
      "paragraph": "Seamless integration of databases like MySQL, MongoDB, PostgreSQL for efficient data storage and retrieval."
    },
    {
      "image": "assets/images/Icon_Set(18).png",
      "heading": "CI/CD Integration:",
      "paragraph": "Seamless integration of Continuous Integration and Continuous Deployment pipelines for efficient development workflows. "
    },
    {
      "image": "assets/images/Icon_Set(19).png",
      "heading": "Web Hosting and Maintenance:",
      "paragraph": "Reliable hosting solutions and ongoing maintenance services to keep your web application running smoothly. "
    },
    {
      "image": "assets/images/Icon_Set(19).png",
      "heading": "Cloud Integration",
      "paragraph": "Integration with cloud platforms such as AWS, Azure, and Google Cloud for scalability and flexibility. "
    },
  ]
  Languagetranslation: any[] = [

    
    {
      "image": "assets/images/Icon_Set(12).png",
      "heading": "Professional Translation:",
      "paragraph": "Our team of linguistic experts delivers accurate translation services for various content types, including documents, websites, and multimedia.  "
    },
    {
      "image": "assets/images/Icon_Set(13).png",
      "heading": "Localization",
      "paragraph": "Tailoring content to specific cultural nuances and regional preferences, we ensure that your message resonates with local audiences worldwide.      "
    },
    {
      "image": "assets/images/Icon_Set(15).png",
      "heading": "Multilingual Content Creation:",
      "paragraph": "From e-learning courses to marketing materials, we create engaging content in multiple languages to expand your global reach. "
    },
    {
      "image": "assets/images/Icon_Set(14).png",
      "heading": "AI-Powered Translation",
      "paragraph": "Leveraging cutting-edge AI technology, we provide efficient and cost-effective translation solutions while maintaining linguistic integrity. "
    },
    {
      "image": "assets/images/Icon_Set(16).png",
      "heading": "Quality Assurance",
      "paragraph": "Rigorous quality assurance processes guarantee flawless translations, adhering to industry standards and client requirements. "
    },
    {
      "image": "assets/images/Icon_Set(17).png",
      "heading": "Scalable Solutions",
      "paragraph": "Whether you need translation for a single project or ongoing multilingual support, our scalable solutions can accommodate your needs. "
    }
  ]

  Videocreation: any[] = [

    
    {
      "image": "assets/images/Icon_Set(12).png",
      "heading": "Custom Video Production",
      "paragraph": "From concept development to final delivery, we offer end-to-end video production services, ensuring every aspect of your project is expertly crafted.  "
    },
    {
      "image": "assets/images/Icon_Set(13).png",
      "heading": "Product Promotion Videos",
      "paragraph": "Showcase your products and services with dynamic promotional videos designed to capture attention and drive engagement. "
    },
    {
      "image": "assets/images/Icon_Set(15).png",
      "heading": "SaaS Product Demos",
      "paragraph": "Highlight the features and benefits of your software solutions through compelling demo videos that educate and inspire. "
    },
    {
      "image": "assets/images/Icon_Set(14).png",
      "heading": "Explainer Videos",
      "paragraph": "Simplify complex ideas and processes with engaging explainer videos that effectively communicate your message to your target audience. "
    },
    {
      "image": "assets/images/Icon_Set(16).png",
      "heading": "Presentation to Video Conversion",
      "paragraph": "Transform your static presentations into dynamic video content that captivates viewers and enhances comprehension. "
    },
    {
      "image": "assets/images/Icon_Set(17).png",
      "heading": "Professional Editing",
      "paragraph": "Our skilled editors refine your footage with precision, ensuring seamless transitions, captivating visuals, and polished final products. "
    },
    {
      "image": "assets/images/Icon_Set(17).png",
      "heading": "Creative Storytelling",
      "paragraph": "We harness the power of storytelling to create compelling narratives that resonate with your audience and leave a lasting impression.  "
    },
    {
      "image": "assets/images/Icon_Set(17).png",
      "heading": "Customized Solutions",
      "paragraph": "Whether you're a startup or a multinational corporation, we tailor our video services to meet your specific goals, budget, and timeline. "
    },
   
  ]
  AIservice: any[] = [

    
    {
      "image": "assets/images/Icon_Set(12).png",
      "heading": "AI Translation",
      "paragraph": "Break down language barriers securely with our AI-driven translation services, ensuring confidentiality and accuracy in cross-cultural communication. "
    },
    {
      "image": "assets/images/Icon_Set(13).png",
      "heading": "AI Audio Recording",
      "paragraph": "Safeguard sensitive audio content with our secure AI audio recording solutions, leveraging encryption protocols for data protection. "
    },
    {
      "image": "assets/images/Icon_Set(15).png",
      "heading": "Video Transcription",
      "paragraph": "Ensure the privacy of your video content with our secure AI transcription services, incorporating encryption to safeguard sensitive information."
    },
    {
      "image": "assets/images/Icon_Set(14).png",
      "heading": "Video to Blog/Article Conversion",
      "paragraph": "Protect your content integrity with our secure AI conversion tools, encrypting data during the conversion process to preserve confidentiality. "
    },
    {
      "image": "assets/images/Icon_Set(16).png",
      "heading": "Video to E-learning Course Structure",
      "paragraph": "Maintain data privacy in e-learning initiatives with our secure AI course structuring services, implementing encryption and data deletion policies for compliance and confidentiality. "
    },
    {
      "image": "assets/images/Icon_Set(17).png",
      "heading": "Innovation and Expertise",
      "paragraph": "With a deep understanding of AI technologies and their applications, we deliver innovative solutions that drive efficiency, productivity, and growth for our clients.  "
    },
    {
      "image": "assets/images/Icon_Set(17).png",
      "heading": "Custom AI Solutions",
      "paragraph": "Build tailored AI solutions with security at their core, integrating encryption and data management practices to protect sensitive information and ensure regulatory compliance.   "
    },
    {
      "image": "assets/images/Icon_Set(17).png",
      "heading": "Data Security Measures",
      "paragraph": "We prioritize data security, implementing encryption protocols and data deletion policies to protect your information throughout its lifecycle, ensuring compliance with privacy regulations.   "
    },
     {
      "image": "assets/images/Icon_Set(14).png",
      "heading": "Scalable and Reliable",
      "paragraph": "Our AI services are scalable and reliable, designed to meet your evolving needs while maintaining the highest standards of data security and integrity. "
    },
  ]

  homecard: any[] = [

    {
      "image": "assets/images/Icon_Set(11).png",
      "heading": "Web Development ",
      "paragraph": "Building dynamic web apps with latest technologies like React, Angular, etc for optimal performance and scalability. ",
      "link":'/service/web-development'
    },
    {
      "image": "assets/images/Icon_Set(20).png",
      "heading": "Staff Augmentation",
      "paragraph": "On-demand expertise to elevate projects, adapt to demands, and enhance team capabilities.",
      "link":'/service/staff-augmentation'
    },
    {
      "image": "assets/images/Icon_Set(21).png",
      "heading": "Learning and Development ",
      "paragraph": "Creating interactive e-learning experiences in 15 languages with AI translation, audio, and video capabilities. ",
      "link":'/service/learning-development'
    },
    {
      "image": "assets/images/language_icon.svg",
      "heading": "Language Translation",
      "paragraph": "Precision translation, localization, and multilingual content development for global audiences. ",
      "link":'/service/language-translation'
    },
    {
      "image": "assets/images/video_icon.svg",
      "heading": "Video Creation ",
      "paragraph": "Tailored video solutions including product promotions, SaaS demos, and engaging explainer videos. ",
      "link":'/service/video-creation'
    },
    {
      "image": "assets/images/ai_icon.png",
      "heading": "AI Services ",
      "paragraph": "Advanced AI-driven solutions for translation, audio narration, and video captioning, enhancing content accessibility and engagement. ",
      "link":'/service/ai-service'
    },
  ] 


}

