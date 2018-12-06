using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace AlloutAPI.Data
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
