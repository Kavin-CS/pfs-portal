function interpolateColor(color1, color2, factor) {
  if (arguments.length < 3) {
    factor = 0.5;
  }
  let result = color1.slice();
  for (let i = 0; i < 3; i++) {
    result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
  }
  return result;
}
// My function to interpolate between two colors completely, returning an array
export function getBgColorPalette(steps) {
  let stepFactor = 1 / (steps - 1),
    interpolatedColorArray = [];
  let color1 = 'rgb(204, 241, 215)';
  let color2 = 'rgb(252, 219, 213)';

  color1 = color1.match(/\d+/g).map(Number);
  color2 = color2.match(/\d+/g).map(Number);

  for (let i = 0; i < steps; i++) {
    interpolatedColorArray.push(
      interpolateColor(color1, color2, stepFactor * i).join(',')
    );
  }

  return interpolatedColorArray;
}

export function getTextColorPalette(steps) {
  let stepFactor = 1 / (steps - 1),
    interpolatedColorArray = [];
  let color1 = 'rgb(0, 186, 53)';
  let color2 = 'rgb(241, 75, 45)';

  color1 = color1.match(/\d+/g).map(Number);
  color2 = color2.match(/\d+/g).map(Number);

  for (let i = 0; i < steps; i++) {
    interpolatedColorArray.push(
      interpolateColor(color1, color2, stepFactor * i).join(',')
    );
  }

  return interpolatedColorArray;
}

export function getGradeColorPalette(grades, bgColors, textColors) {
  let gradeColors = [];
  grades.map((grade, index) => {
    let gradeColor = {};
    gradeColor['grade'] = grade.Grade;
    gradeColor['bkgColor'] = bgColors[index];
    gradeColor['textColor'] = textColors[index];
    gradeColors[index] = gradeColor;
  });
  return gradeColors;
}
