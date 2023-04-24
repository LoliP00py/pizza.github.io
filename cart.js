class cart
{
    constructor()
    {
        this.margherita = 0;
        this.prosciutto = 0;
        this.funghi = 0;
        this.diavola = 0;
        this.wurstel = 0;
        this.patatine = 0;
    }

    reset()
    {
        location.reload();
    }

    aggiungi(pizza)
    {
        
        if(pizza == "margherita")
        {
            
            if(this.margherita == 0)
            {
                this.margherita++;
                $("#pizzas").append("<tr><th id='numMargherita'>" + this.margherita + "</th><th>margherita</th></tr>");
            }
            
            else
            {
                
                this.margherita++;
                $("#numMargherita").text(this.margherita);
            }
        }
        else if(pizza == "prosciutto")
        {
            
            if(this.prosciutto == 0)
            {
               
                this.prosciutto++;
                $("#pizzas").append("<tr><th id='numProsciutto'>" + this.prosciutto + "</th><th>prosciutto</th></tr>");
            }

            else
            {
                
                this.prosciutto++;
                $("#numProsciutto").text(this.prosciutto);
            }        
        }
        else if(pizza == "funghi")
        {
            
            if(this.funghi == 0)
            {
                this.funghi++;
                $("#pizzas").append("<tr><th id='numFunghi'>" + this.funghi + "</th><th>funghi</th></tr>");
            }
            
            else
            {
                this.funghi++;
                $("#numFunghi").text(this.funghi);
            }
        }
        else if(pizza == "diavola")
        {
            
            if(this.diavola == 0)
            {
                this.diavola++;
                $("#pizzas").append("<tr><th id='numDiavola'>" + this.diavola + "</th><th>diavola</th></tr>");
            }
            
            else
            {
                this.diavola++;
                $("#numDiavola").text(this.diavola);
            }
        }
        else if(pizza == "wurstel")
        {
            
            if(this.wurstel == 0)
            {
                this.wurstel++;
                $("#pizzas").append("<tr><th id='numWurstel'>" + this.wurstel + "</th><th>wurstel</th></tr>");
            }
            
            else
            {
                this.wurstel++;
                $("#numWurstel").text(this.wurstel);
            }
        }
        else if(pizza == "patatine")
        {
            
            if(this.patatine == 0)
            {
                this.patatine++;
                $("#pizzas").append("<tr><th id='numPatatine'>" + this.patatine + "</th><th>patatine</th></tr>");
            }
            
            else
            {
                this.patatine++;
                $("#numPatatine").text(this.patatine);
            }
        }
    }
}