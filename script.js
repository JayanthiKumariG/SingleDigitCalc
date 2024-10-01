let n1=0;
let n2=0;
let res=0;
let isOpselected=false;
let restoredOp='';
let isExpCompleted=false;
let isFirstnumselected=false;
function display(val){
    switch(val){
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        if(isOpselected)
        {
            n2=val;
            document.getElementById("input-box").value+=n2;
            isOpselected=true;
            isExpCompleted=true;
        }
        else
        {
            n1=val;
            document.getElementById("input-box").value=n1;
            isFirstnumselected=true;
        }
        break;

        case '+':
        case '-':
        case '*':
        case '/':
            if(isFirstnumselected)
                {
                    isOpselected=true;
        restoredOp=val;
        document.getElementById("input-box").value+=restoredOp;
                }
        break;

        case '=':
            if(isExpCompleted)
            {
                switch(restoredOp)
                {
                    case '+':
                        res=n1+n2;
                        break;
                    case '-':
                        res=n1-n2;
                        break;
                    case '*':
                        res=n1*n2;
                        break;
                    case '/':
                        res=n1/n2;
                        break;
                }
                document.getElementById("input-box").value=res;
                n1=0;
                n2=0;
                res=0;
                restoredOp='';
                isExpCompleted=false;
                isOpselected=false;
                isFirstnumselected=false;
            }
            break;
        case 'C':
            document.getElementById("input-box").value='';
            n1=0;
            n2=0;
            res=0;
            restoredOp='';
            isFirstnumselected=false;
            isExpCompleted=false;
            isOpselected=false;
            break;


    }
}