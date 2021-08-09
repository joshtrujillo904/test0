#include <stdio.h>
#include <string.h>

void encode(char **str)
{ 
 int index = 0;
 char *tmp = strdup(*str);

    while(tmp[index] != '\0'){
        tmp[index] = tmp[index] + 13;
        index++;
    }
    *str = tmp;
}

void decode(char **str)
{
    int i = 0;
    char *tmp = strdup(*str);
    
    while (tmp[i] != '\0'){
        tmp[i] = tmp[i] - 13;
        i++;
    }
     *str = tmp;
}

int main (int argc, char **argv) 
{
	char *test = strdup(argv[1]);
    printf("original is %s\n", test);
	encode(&test);
	printf("after encode: %s\n", test);
	decode(&test);
	printf("after decode: %s\n", test);
	return (0);
}

