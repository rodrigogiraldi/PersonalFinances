using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Web;

namespace PersonalFinances.Models
{
    public class Bill
    {
        [Key]
        public int BillId { get; set; }
        public string Name { get; set; }
        public Operation Operation { get; set; }
        public double Value { get; set; }
        public DateTime? Date { get; set; }
        public string Description { get; set; }
        public Method Method { get; set; }
        public State State { get; set; }
        public int UserId { get; set; }
        [ForeignKey("UserId")]
        public User User { get; set; }

    }
}