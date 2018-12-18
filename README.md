### Usage ###
1. Clone repo into React app
```
mkdir -p draggable
cd draggable
git clone https://github.com/nstruong/draggable.git .
```
2. Include draggable.js
```
import Draggable from "./draggable/Draggable.js";
```
3. Create a draggable list
```
...
return render(
    <Draggable>
        <div className='one' key='one'>One</div>
        <div className='two' key='two'>Two</div>
        <div className='three' key='three'>Three</div>
    </Draggable>
)
```