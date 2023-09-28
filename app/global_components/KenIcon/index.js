import React from 'react';

function KenIcon({
  variant = 'small',
  icon: Icon,
  styles = {},
  iconType = '',
}) {
  const getStyles = () => {
    switch (variant) {
      case 'extraSmall':
        return { fontSize: '8px' };
      case 'medium':
        return { fontSize: '24px' };
      case 'large':
        return { fontSize: '32px' };

      default:
        return { fontSize: '16px' };
    }
  };

  return (
    <>
      {iconType === 'img' ? (
        <img src={Icon} style={{ ...getStyles(), ...styles }} />
      ) : (
        <Icon style={{ ...getStyles(), ...styles }} />
      )}
    </>
  );
}
export default KenIcon;
