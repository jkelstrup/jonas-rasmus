// Dependencies
import React from 'react';

// Local
import styles from './Box.module.scss';

// ROW BOX
export const Row = (props) => {
  let classNames = styles.Row
  if (props.vcenter) { classNames += ' ' + styles.vcenter }
  if (props.hcenter) { classNames += ' ' + styles.hcenter }
  if (props.xcenter) { classNames += ' ' + styles.xcenter }
  if (props.className) {classNames += ' ' + props.className }

  return (
    <div
      className={ classNames }
      style={{
        height: props.h,
        width: props.w,
        flex: !props.h && !props.w && !props.flex ? 1 : props.flex,
        ...props.style
      }}
      id={ props.id }
      onClick={ props.onClick }
    >
      { props.children }
    </div>
  )
}

// COL BOX
export const Col = (props) => {
  let classNames = styles.Col
  if (props.vcenter) { classNames += ' ' + styles.vcenter }
  if (props.hcenter) { classNames += ' ' + styles.hcenter }
  if (props.xcenter) { classNames += ' ' + styles.xcenter }
  if (props.className) {classNames += ' ' + props.className }

  return (
    <div
      className={ classNames }
      style={{
        height: props.h,
        width: props.w,
        flex: !props.h && !props.w && !props.flex ? 1 : props.flex,
        ...props.style
      }}
      id={ props.id }
      onClick={ props.onClick }
    >
      { props.children }
    </div>
  )
}

const Box = {
    Col: Col,
    Row: Row
};

export default Box;
