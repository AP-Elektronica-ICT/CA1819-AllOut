using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API_.Data
{
    public class Question
    {
        public int QuestionID { get; set; }
        public string QuestionText { get; set; }
        public int Points { get; set; }
        public bool IsSolved { get; set; }
    }
}
