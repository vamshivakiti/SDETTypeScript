function reverseString(){

    let name='Vamshi'
    let rvName=''

    for(let i=name.length;i>=0;i--){
        rvName=rvName+name.charAt(i)
    }
    console.log(rvName)
}

reverseString()