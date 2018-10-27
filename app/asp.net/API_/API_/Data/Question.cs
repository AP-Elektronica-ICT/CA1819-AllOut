using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_.Data
{
    public class Question
    {
        public Question()
        {
            
        }
        public int QuestionID { get; set; }
        public int QuestionType { get; set; } // 1 = Question - Answer

        public string QuestionText { get; set; }
        public int Points { get; set; }
        public bool IsSolved { get; set; }

        public string Answer { get; set; }
    }
}
