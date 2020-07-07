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
              title: "Quickbooks Online Certification",
              description: "Conceptual Information",
              duration: "3 mins"
            },
            {
              title: "How to user this course",
              description: "Summery",
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
              title: "What color is the key?",
              description: "Exam question", 
            },
            {
              title: "Describe the color of the sky?",
              description: "Exam question", 
            }
          ]  
        } 
      },  
      {
        lo_title: "LO 2",  
        learning_content:{
          learning_content_duration: "15 mins", 
          data: [ 
            {
              title: "Welcome 2",
              description: "Introduction",
              duration: "4 mins"
            },
            {
              title: "Quickbooks Online Certification 2",
              description: "Conceptual Information",
              duration: "3 mins"
            },
            {
              title: "How to user this course 2",
              description: "Summery",
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
              title: "What color is the key?",
              description: "Exam question", 
            },
            {
              title: "Describe the color of the sky?",
              description: "Exam question", 
            }
          ]  
        } 
      },
    ]
  }

}
