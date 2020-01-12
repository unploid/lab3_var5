function randomTable(){
    var first = Math.ceil(document.ourForm.minN.value);
    var second = Math.floor(document.ourForm.maxN.value);

    document.write('<table style="border-collapse: collapse; border: 3px solid black; width: 600px; height: 600px; text-align: center; font-size: 160%; ">');
    for (i = 1; i < 11; i++)
    {
        document.writeln("<tr>");
        if (i%2 == 0)
        {
            for (j = 1; j < 11; j++)
            {
                if (j%2 == 0 )
                {
                    document.write('<td style="background-color: #696969; width: 10%;">' + Math.floor(Math.random() * (second - first + 1) + first) + "<\/td>");           
                }
                else
                {
                    document.write('<td style="background-color: #DCDCDC; width: 10%;">' + Math.floor(Math.random() * (second - first + 1) + first) + "<\/td>");           
                }
       
            } 

            document.writeln("<\/tr>");
        }   
        else 
        {
            for (j = 1; j < 11; j++)
            {
                if (j%2 == 0 )
                {
                    document.write('<td style="background-color: #DCDCDC; width: 10%;">' + Math.floor(Math.random() * (second - first + 1) + first) + "<\/td>");           
                }
                else
                {
                    document.write('<td style="background-color: #696969; width: 10%;">' + Math.floor(Math.random() * (second - first + 1) + first) + "<\/td>");           
                }
            } 

            document.writeln("<\/tr>");
        }
    }
    document.write("<\/table>"); 
    }