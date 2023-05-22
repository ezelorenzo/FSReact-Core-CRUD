using System;
using System.Collections.Generic;

namespace ProyectoCRUD.Models;

public partial class Contact
{
    public int IdContact { get; set; }

    public string? Name { get; set; }

    public string? Mail { get; set; }

    public string? Phone { get; set; }
}
