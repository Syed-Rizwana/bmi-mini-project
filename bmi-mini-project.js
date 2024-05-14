do{
    mass=parseFloat(prompt("Enter your mass in kg"))
height=parseFloat(prompt("Enter your height in cm"))
bmi=mass/((height/100)**2)
if(bmi<18.5){
    alert("you are under weight")
}
else if(bmi<25){
    alert("You have normal bmi")
}
else if(bmi<30){
    alert("Over weight")
}
else{
    alert("obese")
}
check=prompt("Do you want to continue")
    }
while(check=='yes')

