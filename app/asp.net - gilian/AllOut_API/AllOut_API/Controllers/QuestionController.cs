using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AlloutAPI.Data;
using AlloutAPI;
using BusinessLayer;

namespace AllOut_API.Controllers
{
    public class QuestionController : Controller
    {
        private readonly DBContext context;
        private readonly QuestionFacade questionFacade;

        public QuestionController(DBContext context)
        {
            this.context = context;
            this.questionFacade = new QuestionFacade(context);
        }
        [HttpPut]
        public IActionResult putQuestion([FromBody]Question newQuestion)
        {
            return Created("", questionFacade.putQuestion(newQuestion));
        }

        [HttpPost]
        public IActionResult postQuestion([FromBody] Question newQuestion)
        {
            return Created("", questionFacade.postQuestion(newQuestion));
        }

        [HttpGet]
        public List<Question> getLocations()
        {
            return questionFacade.getQuestions();
        }

        [Route("{id}")]
        [HttpGet]
        public Question getQuestion(int id)
        {
            return questionFacade.getQuestion(id);
        }
    }
}