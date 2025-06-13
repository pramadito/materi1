//14 easy 3 medium
/*
https://leetcode.com/problems/roman-to-integer/description/

https://leetcode.com/problems/two-sum/description/ :checkmark:

https://leetcode.com/problems/longest-common-prefix/description/


https://leetcode.com/problems/longest-happy-prefix/description/
*/

let text: string = "ada"

function romanToInt(s: string): number {
    const romanList = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };
    let total = 0;
    for(let i=s.length-2; i >=0; i--){
        const currentVal:number = romanList[s[i]];
        const previousVal:number = romanList[s[i + 1]];
        if (currentVal < previousVal){
            total -= currentVal;
        } else {
            total += currentVal;
        }
    }
    return total;
};

console.log(romanToInt("MVI"))



function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) {
        return "";
    }
    
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === "") {
                return "";
            }
        }
    }
    return prefix;
}



class KMP_algo{
    private GivenString : string;
    private Pattern : string;
    private PI_Table:Array<number>;
    private IsMatched:boolean;
    public constructor(GivenString:string,Pattern : string){
        this.GivenString = GivenString;
        this.Pattern = Pattern;
        this.PI_Table=[];
        this.IsMatched = false;
        this.Create_PI_Table();
        this.FindPattern();
        let PatternTable:{Charecter:string,FirstOccurance:number}[] = [...this.Pattern].map((item,index)=>({Charecter:item,FirstOccurance:this.PI_Table[index]}));
        console.table(PatternTable);
        console.log(this.IsMatched);
    }
    private Create_PI_Table():void{
        [...this.Pattern].forEach((item,index)=>{
            let FirstOccurance:number=this.Pattern.indexOf(item);    
            this.PI_Table.push((FirstOccurance===index)?(-1):(FirstOccurance));
        });
    }
    private FindPattern():void{
        let PatternIndex:number = -1,StringIndex:number;
        if(!(this.Pattern.length>this.GivenString.length)){
            for(StringIndex = 0;StringIndex<this.Pattern.length;StringIndex++){
                PatternIndex = (
                        this.Pattern[StringIndex] === this.GivenString[StringIndex]
                    )?
                    (
                        PatternIndex+1
                    ):
                    (
                        (PatternIndex===-1)?
                            (-1):
                            (this.PI_Table[PatternIndex])
                    );
            }
            this.IsMatched = (PatternIndex===(this.Pattern.length-1))?(true):(false);
        }else{
            this.IsMatched = false;
        }
    }
}
console.clear();


function longestPrefix(s: string): string {
    
};




function shortestPalindrome(s: string): string {
    const temp: string = s + '#' + s.split('').reverse().join('');
    const table: number[] = getTable(temp);
    
    // Get the maximum palindromic part in s starting from 0
    const maxPalindromeLength: number = table[table.length - 1];
    const toAdd: string = s.substring(maxPalindromeLength).split('').reverse().join('');
    return toAdd + s;
}
function getTable(s: string): number[] {
    const table: number[] = new Array(s.length).fill(0);
    let index = 0; // Pointer to the matched character in the prefix part
    
    for (let i = 1; i < s.length; i++) {
        if (s[index] === s[i]) {
            // Extend the match in prefix and postfix
            table[i] = table[i - 1] + 1;
            index++;
        } else {
            // Match failed, try to match a shorter substring
            index = table[i - 1];
            
            while (index > 0 && s[index] !== s[i]) {
                // Shorten the match string length
                index = table[index - 1];
            }
            
            // Check if characters match
            if (s[index] === s[i]) {
                index++;
            }
            
            table[i] = index;
        }
    }
    
    return table;
}




function combinationSum(candidates: number[], target: number): number[][] {
    
};



function integerToRoman(num: number): string {
    const RomanSymboltoInt: [number, string][] = [
        [1000, "M"],
        [900, "CM"],
        [500, "D"],
        [400, "CD"],
        [100, "C"],
        [90, "XC"],
        [50, "L"],
        [40, "XL"],
        [10, "X"],
        [9, "IX"],
        [5, "V"],
        [4, "IV"],
        [1, "I"]
    ];
    
    let result = "";
    
    for (const [value, symbol] of  RomanSymboltoInt) {
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }
    
    return result;
}


function convertTemperature(celsius: number): number[] {
    let array:any[]= [celsius+273.15, celsius * 1.8 + 32]
    return array
};

console.log(convertTemperature(32));

function numIdenticalPairs(nums: number[]): number {
        const hash = new Map<number, number>();
        let pairs = 0;
        
        for (const num of nums) {
            pairs += hash.get(num) || 0;
            hash.set(num, (hash.get(num) || 0) + 1);
        }
        
        return pairs;
    }
};