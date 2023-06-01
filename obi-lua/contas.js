var v, a, f, p;
var valor1, valor2, valor3, valor4;

scanf("%d", "v");
scanf("%d", "a");
scanf("%d", "f");
scanf("%d", "p");

valor1 = a + f + p;
valor2 = a + f;
valor3 = a + p;
valor4 = p + f;

if(v >= valor1){
    printf("3\n");
} else if(v>=valor2 || v>=valor3 || v>=valor4){
    printf("2\n");
} else if((v<valor2 && v>a) || (v<valor2 && v>f)){
    printf("1\n");
} else if((v<valor3 && v>=a) || (v<valor3 && v>=p)){
    printf("1\n");
} else if((v<valor4 && v>=p) || (v<valor4 && v>=f)){
    printf("1\n");
} else {
    printf("0\n");
}