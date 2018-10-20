var shadow = (function() {
    var set = function(obj, x, y, color, blur) {
            //阴影x轴的偏移距离
            obj.shadowOffsetX = x;
            //阴影y轴的偏移距离
            obj.shadowOffsetY = y;
            //阴影颜色
            obj.shadowColor = color;
            //阴影的模糊程度
            obj.shadowBlur = blur;
        },
        cancel = function(obj) {
            obj.shadowOffsetX = 0;
            //阴影y轴的偏移距离
            obj.shadowOffsetY = 0;
            //阴影颜色
            obj.shadowColor = "rgba(0,0,0,0)";
            //阴影的模糊程度
            obj.shadowBlur = 0;
        };
    return {
        set: set,
        cancel: cancel
    }
})();