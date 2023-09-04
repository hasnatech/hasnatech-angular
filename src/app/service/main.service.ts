import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private title: Title, private meta: Meta) { }
  getCaseStudy(id: number) {
    return this.casestudies.filter(f => f.id == id)[0];
  }
  getBlog(id: number) {
    return this.blogs.filter(f => f.id == id)[0];
  }
  casestudies = [
    {
      id: 1,
      title: 'Breathing New Life into Legacy Content',
      description: `In this case study, we delve into how we addressed [Client Name]'s unique needs, leveraging [Specific Technology] to deliver a game-changing solution. Discover how our collaboration led to [Impact/Outcome].`,
      img: 'assets/images/casestudy/casestudy_1.png',
      content: `
      <h2>Challenge: Transitioning from Adobe Flash to HTML5</h2>
      <p>In the face of Adobe Flash's discontinuation, our client, a leading organization in [Industry], found itself grappling with a formidable challenge. With a repository of over a thousand e-learning courses built on Flash, they were faced with the imminent obsolescence of their valuable learning content. These courses, pivotal for training and development, were at risk of becoming unusable and ineffective.</p>
      <p><img src='assets/images/casestudy/casestudy_1_1.png'></p>
      <h2>Solution: Modernizing Legacy Content</h2>
      <p>Understanding the urgency and importance of the situation, our team at [Your Company Name] stepped in to provide a tailored solution. Leveraging our expertise in e-learning development and technology migration, we embarked on the mission to modernize their legacy courses.</p>
      <p>Our approach involved meticulous analysis and conversion of each course from Adobe Flash to HTML5, ensuring compatibility with modern browsers and devices. This was not just a technical migration but a holistic transformation that retained the essence of the content while enhancing interactivity, engagement, and user experience.</p>
      <h2>Results: A Revitalized Learning Landscape</h2>
      <p>The results were transformative. What once seemed like a daunting challenge turned into an opportunity for our client to elevate their learning initiatives. The revitalized courses, now powered by HTML5, offered a seamless learning experience across devices, enabling learners to access training content wherever and whenever they needed.</p>
      <p>The modernized courses also showcased improved engagement through interactive elements, multimedia integration, and dynamic assessments. The transition from Flash to HTML5 had not only preserved their existing investment but also future-proofed their learning content.</p>
      <h2>Key Achievements:</h2>
      <p>
      <ul><li>Successful migration of over a thousand courses from Flash to HTML5.</li>
      <li>Improved user experience with responsive design and cross-device compatibility.</li>
      <li>Enhanced engagement through interactive elements and multimedia integration.</li>
      <li>Future-proofed learning content, aligning with modern technology standards.</li>
      </ul>
      <p>Through strategic collaboration, dedication, and a deep understanding of our client's needs, we transformed a challenge into an opportunity for growth. Our success story with [Client Name] is a testament to our commitment to delivering innovative solutions that empower organizations to thrive in a rapidly evolving digital landscape.</p>
      `
    },
    {
      id: 2,
      title: 'Breathing New Life into Legacy Content',
      description: `In this case study, we delve into how we addressed [Client Name]'s unique needs, leveraging [Specific Technology] to deliver a game-changing solution. Discover how our collaboration led to [Impact/Outcome].`,
      img: 'assets/images/casestudy/casestudy_1.png',
      content: ''
    },
    {
      id: 3,
      title: 'Breathing New Life into Legacy Content',
      description: `In this case study, we delve into how we addressed [Client Name]'s unique needs, leveraging [Specific Technology] to deliver a game-changing solution. Discover how our collaboration led to [Impact/Outcome].`,
      img: 'assets/images/casestudy/casestudy_1.png',
      content: ''
    },
    {
      id: 4,
      title: 'Breathing New Life into Legacy Content',
      description: `In this case study, we delve into how we addressed [Client Name]'s unique needs, leveraging [Specific Technology] to deliver a game-changing solution. Discover how our collaboration led to [Impact/Outcome].`,
      img: 'assets/images/casestudy/casestudy_1.png',
      content: ''
    }
  ]

  blogs = [
    {
      id: 1,
      title: 'Embracing the Future: Top eLearning Trends for 2023',
      description: `Discover the emerging eLearning trends that are reshaping the way we learn and train. From microlearning to AI-driven personalization, we explore what's on the horizon.`,
      img: 'assets/images/blog/blog_1.png',
      content: `
      <h2>Challenge: Transitioning from Adobe Flash to HTML5</h2>
      <p>In the face of Adobe Flash's discontinuation, our client, a leading organization in [Industry], found itself grappling with a formidable challenge. With a repository of over a thousand e-learning courses built on Flash, they were faced with the imminent obsolescence of their valuable learning content. These courses, pivotal for training and development, were at risk of becoming unusable and ineffective.</p>
      <p><img src='assets/images/blog/blog_1_1.png'></p> 
      <h2>Solution: Modernizing Legacy Content</h2>
      <p>Understanding the urgency and importance of the situation, our team at [Your Company Name] stepped in to provide a tailored solution. Leveraging our expertise in e-learning development and technology migration, we embarked on the mission to modernize their legacy courses.</p>
      <p>Our approach involved meticulous analysis and conversion of each course from Adobe Flash to HTML5, ensuring compatibility with modern browsers and devices. This was not just a technical migration but a holistic transformation that retained the essence of the content while enhancing interactivity, engagement, and user experience.</p>
      <h2>Results: A Revitalized Learning Landscape</h2>
      <p>The results were transformative. What once seemed like a daunting challenge turned into an opportunity for our client to elevate their learning initiatives. The revitalized courses, now powered by HTML5, offered a seamless learning experience across devices, enabling learners to access training content wherever and whenever they needed.</p>
      <p>The modernized courses also showcased improved engagement through interactive elements, multimedia integration, and dynamic assessments. The transition from Flash to HTML5 had not only preserved their existing investment but also future-proofed their learning content.</p>
      <h2>Key Achievements:</h2>
      <p>
      <ul><li>Successful migration of over a thousand courses from Flash to HTML5.</li>
      <li>Improved user experience with responsive design and cross-device compatibility.</li>
      <li>Enhanced engagement through interactive elements and multimedia integration.</li>
      <li>Future-proofed learning content, aligning with modern technology standards.</li>
      </ul>
      <p>Through strategic collaboration, dedication, and a deep understanding of our client's needs, we transformed a challenge into an opportunity for growth. Our success story with [Client Name] is a testament to our commitment to delivering innovative solutions that empower organizations to thrive in a rapidly evolving digital landscape.</p>
      `
    },
    {
      id: 2,
      title: 'Breathing New Life into Legacy Content',
      description: `In this case study, we delve into how we addressed [Client Name]'s unique needs, leveraging [Specific Technology] to deliver a game-changing solution. Discover how our collaboration led to [Impact/Outcome].`,
      img: 'assets/images/blog/blog_1.png',
      content: ''
    },
    {
      id: 3,
      title: 'Breathing New Life into Legacy Content',
      description: `In this case study, we delve into how we addressed [Client Name]'s unique needs, leveraging [Specific Technology] to deliver a game-changing solution. Discover how our collaboration led to [Impact/Outcome].`,
      img: 'assets/images/blog/blog_1.png',
      content: ''
    },
    {
      id: 4,
      title: 'Breathing New Life into Legacy Content',
      description: `In this case study, we delve into how we addressed [Client Name]'s unique needs, leveraging [Specific Technology] to deliver a game-changing solution. Discover how our collaboration led to [Impact/Outcome].`,
      img: 'assets/images/blog/blog_1.png',
      content: ''
    }
  ]


  setMeta(t: string, desc: string, image: string) {
    this.title.setTitle("Hasna Technology | " + t)
    this.meta.addTag({ "og:title": t });
    this.meta.addTag({ "og:description": desc });
    this.meta.addTag({ "og:image": location.origin+ "/" + image });
    this.meta.addTag({ "og:url": location.href });
  }
}
