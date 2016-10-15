*The kvserver is located in distributed-systems/project-1/kvserver


*The kvclient is located in distributed-systems/project-1/kvclient


For each of the above, go to the respective folder and run:
```npm install``` to install thrift dependencies.


Finally, open 2 separate terminal windows and run the kvserver in one and kvclient in the other.


```node kvserver```


```node kvclient set waqid w123```
```node kvclient get waqid```
```node kvclient del waqid```
