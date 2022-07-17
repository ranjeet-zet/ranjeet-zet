function threeMaxThreeMin(N,arr){
    //write code here
    let obb={};
    for(let i=0;i<N;i++){
        obb[arr[i]]=0;
    }
    let arr2=[];
    
    for(let i in obb){
        let a=+i;
        arr2.push(a);
    }
    // console.log(arr2);
    arr=arr2;

    let min1=-Infinity;
    let min2=-Infinity;
    let min3=-Infinity;
    
    let max1=Infinity;
    let max2=Infinity;
    let max3=Infinity;
    
    for(let i=0;i<N;i++){
        if(arr[i]>min1){
            min3=min2;
            min2=min1;
            min1=arr[i];
        }else if(arr[i]>min2){
            min3=min2;
            min2=arr[i];
        }else if(arr[i]>min3){
            min3=arr[i];
        }
        if(arr[i]<max1){
            max3=max2;
            max2=max1;
            max1=arr[i];
        }else if(arr[i]<max2){
            max3=max2;
            max2=arr[i];
            
        }else if(arr[i]<max3)
            max3=arr[i];

    }
    
    if(min1== -Infinity || min2== -Infinity || min3== -Infinity || max1== Infinity || max2== Infinity || max3== Infinity){
        console.log("Not Possible");
        console.log("Not Possible");
    }else{
        
       console.log(max1,max2,max3);
       console.log(min3,min2,min1);
    }
}


