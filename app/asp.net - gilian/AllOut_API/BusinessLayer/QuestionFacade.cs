using AlloutAPI;
using AlloutAPI.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace BusinessLayer
{
    public class QuestionFacade
    {
        private readonly DBContext context;
        public QuestionFacade(DBContext context)
        {
            this.context = context;
        }
        public Question putQuestion(Question newQuestion)
        {
            Question result = context.Questions.SingleOrDefault(q => q.QuestionID == newQuestion.QuestionID);
            if (result != null)
            {
                result.IsSolved = newQuestion.IsSolved;
                result.Points = newQuestion.Points;
                result.QuestionText = newQuestion.QuestionText;
                result.QuestionType = newQuestion.QuestionType;

                context.SaveChanges();
            }
            return newQuestion;
        }

        public Question postQuestion(Question newQuestion)
        {
            
            return newQuestion;
        }

        public List<Question> getQuestions()
        {
            var result = context.Questions;
            return result.ToList();
        }

        public Question getQuestion(int id)
        {
            var question = context.Questions.SingleOrDefault(q => q.QuestionID == id);
            return question;
        }
    }
}
