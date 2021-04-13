# DiagramGenerator

## Input Data


### BlockGroup
``` javascript
{
    color: '#CAFFBF',
    borderColor: '#147A00',
    size: `32px`,
    sizeX: `120px`, // doesn't work with 'circle'
    sizeY: `50px`, // doesn't work with 'circle'
    blockName: 'output',
    blockType: 'rect' | 'circle' | 'text', 
    items: [ itemElement ]
}
```

### itemElement
``` javascript
{
    id: 'x4',
    val: `<span>
      x<sub>4</sub>
    </span>`, // (optional)
    tooltipValue: `<span>
      h<sub>t</sub> = f<sub>W</sub>(x<sub>t</sub>, h<sub>t-1</sub>)
    </span>`, // (optional)
    name: 'attention', // displayed next to image (optional)
    namePosition: 'top' | 'bottom', // where to place the name (optional)
    position: [
      (firstRowPosition + boxPadding) * animationWidth * 3,
      bottomRowPosition * animationHeight,
    ], // [x, y]
    lines: [
      {
        from: [
          step1.inputs.items[0].position[0] + boxSize / 2,
          step1.inputs.items[0].position[1],
        ], // [ x, y ]
        points: [
            [x, y],
            [x, y],
        ], // (optional) only when "multi" type selected
        to: [ x,y ], // [ x, y ]
        orientation: 'horizontal' | 'vertical' | 'multi-squared' | 'multi-curved', // vertical is defaul (optional)
      },
    ]
}
```