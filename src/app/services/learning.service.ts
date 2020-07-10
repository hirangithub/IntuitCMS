import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LearningService {

  constructor() { }


  getLearningOutcomes(){
    return [
      {
        lo_title: "Establish a potential client's QuickBooks Online and QuickBooks Self-Employed needs",  
        learning_content:{
          learning_content_duration: "10 mins", 
          data: [ 
            {
              title: "Welcome",
              description: "Introduction",
              duration: "4 mins"
            },
            {
              title: "QuickBooks Online Certification",
              description: "Conceptual Information",
              duration: "3 mins"
            },
            {
              title: "How to use this course",
              description: "Summary",
              duration: "3 mins"
            }
          ],  
        }, 
        questions: {
          total_questions: 4,
          total_exams: 2,
          total_kc: 1,
          total_cpe: 1,
          data: [ 
            {
              title: "When you log into QuickBooks Online Accountant, whose books can you direct...",
              description: "Knowledge Check", 
            },
            {
              title: "In QuickBooks Online Accountant, what can you access through the + New button?",
              description: "Knowledge Check", 
            }
          ]  
        } 
      },  
      {
        lo_title: "Recognize where QuickBooks Online sits in Intuit’s product suite",  
        learning_content:{
          learning_content_duration: "15 mins", 
          data: [ 
            {
              title: "Welcome to QuickBooks",
              description: "Introduction",
              duration: "4 mins"
            },
            {
              title: "The Intuit product family",
              description: "Conceptual Information",
              duration: "3 mins"
            },
            {
              title: "The QuickBooks Online ecosystem",
              description: "Hands-on Activity",
              duration: "3 mins"
            },
            {
              title: "Summing up",
              description: "Summary",
              duration: "3 mins"
            }
          ],  
        }, 
        questions: {
          total_questions: 4,
          total_exams: 0,
          total_kc: 1,
          total_cpe: 1,
          data: [ 
            {
              title: "Which product do you think might suit him best?",
              description: "Knowledge Check", 
            }
          ]  
        } 
      },  
      {
        lo_title: "Identify how to earn points in the new ProAdvisor benefits program and move through the tiers",  
        learning_content:{
          learning_content_duration: "15 mins", 
          data: [ 
            {
              title: "Welcome to ProAdvisor benefits",
              description: "Introduction",
              duration: "4 mins"
            },
            {
              title: "Frequently asked questions",
              description: "Conceptual Information",
              duration: "3 mins"
            },
            {
              title: "The QuickBooks Online ecosystem",
              description: "Hands-on Activity",
              duration: "3 mins"
            },
            {
              title: "Summing up",
              description: "Summary",
              duration: "3 mins"
            }
          ],  
        }, 
        questions: {
          total_questions: 1,
          total_exams: 0,
          total_kc: 1,
          total_cpe: 0,
          data: [ 
            {
              title: "How many points will this earn the firm?",
              description: "Knowledge Check", 
            }
          ]  
        } 
      },
      {
        lo_title: "Recognize the main features of QuickBooks Online Accountant and how to access clients’ QuickBooks Online and the Accountant Tools",  
        learning_content:{
          learning_content_duration: "15 mins", 
          data: [ 
            {
              title: "Navigating QuickBooks Online Accountant",
              description: "Introduction",
              duration: "4 mins"
            },
            {
              title: "QuickBooks Online Accountant Dashboard",
              description: "Conceptual Information",
              duration: "3 mins"
            },
            {
              title: "Let’s take a look around!",
              description: "Hover Help",
              duration: "3 mins"
            },
            {
              title: "The Client List",
              description: "Hover Help",
              duration: "3 mins"
            },
            {
              title: "Summing up",
              description: "Summary",
              duration: "3 mins"
            }
          ],  
        }, 
        questions: {
          total_questions: 1,
          total_exams: 0,
          total_kc: 1,
          total_cpe: 0,
          data: [ 
            {
              title: "On the QuickBooks Online Accountant Dashboard, where would you go to find the best advice for ProAdvisors...",
              description: "Knowledge Check", 
            }
          ]  
        } 
      },
      {
        lo_title: "Module One Review - Getting started in QuickBooks Online Accountant",  
        learning_content:{
          learning_content_duration: "15 mins", 
          data: [ 
            {
              title: "Module One Review - Getting started in QuickBooks Online Accountant",
              description: "Introduction",
              duration: "4 mins"
            },
            {
              title: "Summing up",
              description: "Summary",
              duration: "3 mins"
            }
          ],  
        }, 
        questions: {
          total_questions: 1,
          total_exams: 0,
          total_kc: 1,
          total_cpe: 0,
          data: [ 
            {
              title: "Which product will help him manage all his clients all in one place?",
              description: "Knowledge Check", 
            },
            {
              title: "When you log into QuickBooks Online Accountant, whose books can you direct...", 
              description: "Knowledge Check", 
            },
            {
              title: "In QuickBooks Online Accountant, what can you access through the + New button?",
              description: "Knowledge Check", 
            },
            {
              title: "Which of the following benefits will you gain by becoming a ProAdvisor?",
              description: "Knowledge Check", 
            },
            {
              title: "How do you earn points for your firm through the ProAdvisor program?",
              description: "Knowledge Check", 
            }
          ]  
        } 
      }
    ]
  }

}
