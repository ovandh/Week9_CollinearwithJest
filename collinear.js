const collinear = (x1, y1, x2, y2, x3, y3 ) =>
    {
   let slopeA = (y2 - y1) / (x2 - x1);
   let slopeB = (y3 - y1) / (x3 - x1);
   let slopeC = (y3 - y2) / (x3 - x2);

   return (slopeA === slopeB && slopeB === slopeC );
    };

module.exports = { collinear };