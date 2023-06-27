#include<bits/stdc++.h>
using namespace std;

int main(){
  int t;
  cin>>t;
  while(t--){
    int n;
    cin>>n;
    int arr[n];
    for(int i=0;i<n;i++){
      cin>>arr[i];
    }

    int sum=0;
    for(int i=0;i<n;i++){
    sum+=arr[i];
    }

    int a=0,b=0;
    for(int i=0;i<n;i++){
      if(arr[i]==1)a++;
      else b++;
    }

    if(sum>=0 && b%2==0)cout<<"0"<<endl;
    else if(sum>=0 && b%2!=0)cout<<"1"<<endl;
    else if(sum<0 && sum%2==0 && b%2==0)cout<<(-1)*sum<<endl;
    else if(sum<0 && sum%2!=0 && b%2==0)cout<<(-1)*(sum+1)<<endl;
    else if(sum<0 && sum%2==0 && b%2!=0)cout<<(-1)*(sum+1)<<endl;
    else cout<<-1*sum<<endl;
  } 
  return 0;
}