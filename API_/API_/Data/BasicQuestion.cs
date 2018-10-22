using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_.Data
{
    public class BasicQuestion
    {
        public int BasicQuestionID { get; set; }
        public string Answer { get; set; }
        public string QuestionText { get; set; }
        public int Points { get; set; }
        public bool IsSolved { get; set; }
    }
}