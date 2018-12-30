using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace AlloutAPI.Data
{
    public class DefaultQuestion
    {
        public int BasicQuestionID { get; set; }
        public string Answer { get; set; }
        public string QuestionText { get; set; }
        public int Points { get; set; }
        public bool IsSolved { get; set; }
    }
}