/* @ds-bundle: {"format":4,"namespace":"PetitNuageDesignSystem_f04838","components":[{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Tabs","sourcePath":"components/display/Tabs.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"}],"sourceHashes":{"components/display/Badge.jsx":"bae24f342dcb","components/display/Card.jsx":"021ce105977f","components/display/Tabs.jsx":"31e1049328b3","components/display/Tag.jsx":"6dd7b0cb3af0","components/feedback/Dialog.jsx":"dd0c9553584c","components/feedback/Toast.jsx":"5d5f73e77530","components/feedback/Tooltip.jsx":"d7fa4d55ec06","components/forms/Button.jsx":"02b293ea7af7","components/forms/Checkbox.jsx":"fe0c9245dfa8","components/forms/IconButton.jsx":"2d55c64c8df0","components/forms/Input.jsx":"9ce617f67fd0","components/forms/Radio.jsx":"9f0392002ce4","components/forms/Select.jsx":"5faafd8d0a0e","components/forms/Switch.jsx":"0bb6f6780c89","ui_kits/boutique/Chrome.jsx":"eabc5130c370","ui_kits/boutique/Editorial.jsx":"3dc7d6fee920","ui_kits/boutique/Home.jsx":"801542dddb91","ui_kits/boutique/Product.jsx":"c6e24f42fd19","ui_kits/boutique/data.js":"758bdcc6f05d","ui_kits/boutique/tweaks-panel.jsx":"6591467622ed"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.PetitNuageDesignSystem_f04838 = window.PetitNuageDesignSystem_f04838 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/display/Badge.jsx
try { (() => {
function Badge({
  tone = 'jouy',
  children,
  style
}) {
  const tones = {
    jouy: {
      background: 'var(--lpm-jouy-100)',
      color: 'var(--lpm-jouy-700)'
    },
    wool: {
      background: 'var(--lpm-wool-100)',
      color: 'var(--lpm-wool-700)'
    },
    rose: {
      background: 'var(--lpm-rose-100)',
      color: '#B06478'
    },
    sage: {
      background: 'var(--lpm-sage-100)',
      color: '#5F7852'
    },
    success: {
      background: 'var(--status-success-bg)',
      color: 'var(--status-success)'
    },
    warning: {
      background: 'var(--status-warning-bg)',
      color: 'var(--status-warning)'
    },
    error: {
      background: 'var(--status-error-bg)',
      color: 'var(--status-error)'
    },
    ink: {
      background: 'var(--lpm-ink-900)',
      color: '#FFFDF8'
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '4px 12px',
      borderRadius: 'var(--radius-sm)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-semibold)',
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      ...tones[tone],
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Card({
  variant = 'shadow',
  padding = 'var(--space-5)',
  hoverLift = false,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const variants = {
    shadow: {
      boxShadow: 'var(--shadow-card)',
      border: 'none'
    },
    outline: {
      boxShadow: 'none',
      border: '1px solid var(--border-soft)'
    },
    soft: {
      boxShadow: 'none',
      border: 'none',
      background: 'var(--surface-soft)'
    },
    jouy: {
      boxShadow: 'none',
      border: 'none',
      background: 'var(--surface-jouy)'
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-lg)',
      padding,
      fontFamily: 'var(--font-body)',
      color: 'var(--text-body)',
      transition: 'transform var(--dur-base) var(--ease-drift), box-shadow var(--dur-base) var(--ease-drift)',
      ...variants[variant],
      ...(hoverLift && hover ? {
        transform: 'translateY(-4px)',
        boxShadow: 'var(--shadow-lift)'
      } : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Tabs.jsx
try { (() => {
function Tabs({
  tabs = [],
  active,
  defaultActive,
  onChange,
  style
}) {
  const [internal, setInternal] = React.useState(defaultActive ?? tabs[0]);
  const current = active !== undefined ? active : internal;
  const pick = t => {
    if (active === undefined) setInternal(t);
    onChange && onChange(t);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      gap: 4,
      padding: 4,
      background: 'var(--surface-soft)',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, tabs.map(t => /*#__PURE__*/React.createElement("button", {
    key: t,
    onClick: () => pick(t),
    style: {
      border: 'none',
      padding: '8px 20px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-bold)',
      cursor: 'pointer',
      background: current === t ? 'var(--surface-card)' : 'transparent',
      color: current === t ? 'var(--text-heading)' : 'var(--text-muted)',
      boxShadow: current === t ? 'var(--shadow-card)' : 'none',
      transition: 'background var(--dur-fast) var(--ease-drift), color var(--dur-fast) var(--ease-drift)'
    }
  }, t)));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
function Tag({
  selected,
  onClick,
  onRemove,
  children,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '7px 16px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-bold)',
      cursor: onClick ? 'pointer' : 'default',
      background: selected ? 'var(--accent)' : hover && onClick ? 'var(--surface-soft)' : 'var(--surface-card)',
      color: selected ? '#fff' : 'var(--text-body)',
      border: `1px solid ${selected ? 'var(--accent)' : 'var(--border-strong)'}`,
      transition: 'background var(--dur-fast) var(--ease-drift), color var(--dur-fast) var(--ease-drift)',
      ...style
    }
  }, children, onRemove && /*#__PURE__*/React.createElement("svg", {
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3",
    strokeLinecap: "round",
    style: {
      cursor: 'pointer',
      opacity: 0.7
    }
  }, /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  open = true,
  tone = 'success',
  children,
  style
}) {
  const tones = {
    success: {
      icon: '✓',
      color: 'var(--status-success)',
      bg: 'var(--status-success-bg)'
    },
    error: {
      icon: '!',
      color: 'var(--status-error)',
      bg: 'var(--status-error-bg)'
    },
    info: {
      icon: 'i',
      color: 'var(--lpm-jouy-700)',
      bg: 'var(--lpm-jouy-100)'
    }
  };
  const t = tones[tone];
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-pill)',
      boxShadow: 'var(--shadow-lift)',
      padding: '10px 20px 10px 10px',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-heading)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 28,
      height: 28,
      borderRadius: '50%',
      flexShrink: 0,
      background: t.bg,
      color: t.color,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 14,
      fontWeight: 800
    }
  }, t.icon), children);
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
function Tooltip({
  label,
  children
}) {
  const [show, setShow] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    style: {
      position: 'relative',
      display: 'inline-flex'
    }
  }, children, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: 'calc(100% + 8px)',
      left: '50%',
      transform: `translateX(-50%) translateY(${show ? 0 : 4}px)`,
      background: 'var(--lpm-ink-900)',
      color: '#fff',
      padding: '6px 14px',
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-bold)',
      whiteSpace: 'nowrap',
      pointerEvents: 'none',
      opacity: show ? 1 : 0,
      transition: 'opacity var(--dur-fast) var(--ease-drift), transform var(--dur-fast) var(--ease-drift)',
      zIndex: 50
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const sizes = {
  sm: {
    height: 'var(--control-height-sm)',
    padding: '0 16px',
    fontSize: 'var(--text-sm)'
  },
  md: {
    height: 'var(--control-height)',
    padding: '0 24px',
    fontSize: 'var(--text-md)'
  },
  lg: {
    height: '52px',
    padding: '0 32px',
    fontSize: 'var(--text-lg)'
  }
};
const variants = {
  primary: {
    background: 'var(--accent)',
    color: 'var(--text-on-accent)',
    border: 'none'
  },
  secondary: {
    background: 'var(--surface-soft)',
    color: 'var(--accent-strong)',
    border: 'none'
  },
  outline: {
    background: 'transparent',
    color: 'var(--text-heading)',
    border: '1px solid var(--border-strong)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-body)',
    border: 'none'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  disabled,
  icon,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const hoverStyles = {
    primary: {
      background: 'var(--accent-strong)'
    },
    secondary: {
      background: 'var(--accent-soft)'
    },
    outline: {
      background: 'var(--surface-soft)',
      borderColor: 'var(--border-focus)'
    },
    ghost: {
      background: 'var(--surface-soft)'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      borderRadius: 'var(--radius-pill)',
      fontFamily: 'var(--font-body)',
      fontWeight: 'var(--weight-bold)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transition: 'background var(--dur-fast) var(--ease-drift), border-color var(--dur-fast) var(--ease-drift)',
      ...sizes[size],
      ...variants[variant],
      ...(hover && !disabled ? hoverStyles[variant] : null),
      ...style
    }
  }, rest), icon, children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  style
}) {
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isOn = checked !== undefined ? checked : internal;
  const toggle = () => {
    if (checked === undefined) setInternal(!isOn);
    onChange && onChange(!isOn);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-md)',
      color: 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: toggle,
    role: "checkbox",
    "aria-checked": isOn,
    tabIndex: 0,
    onKeyDown: e => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        toggle();
      }
    },
    style: {
      width: 22,
      height: 22,
      borderRadius: 8,
      flexShrink: 0,
      border: `2px solid ${isOn ? 'var(--accent)' : 'var(--border-strong)'}`,
      background: isOn ? 'var(--accent)' : 'var(--surface-card)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background var(--dur-fast) var(--ease-drift), border-color var(--dur-fast) var(--ease-drift)'
    }
  }, isOn && /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "#fff",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "20 6 9 17 4 12"
  }))), label && /*#__PURE__*/React.createElement("span", {
    onClick: toggle
  }, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function IconButton({
  label,
  size = 'md',
  variant = 'soft',
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const d = size === 'sm' ? 34 : size === 'lg' ? 52 : 44;
  const variants = {
    soft: {
      background: 'var(--surface-soft)',
      color: 'var(--accent-strong)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-muted)'
    },
    solid: {
      background: 'var(--accent)',
      color: '#fff'
    }
  };
  const hovers = {
    soft: {
      background: 'var(--accent-soft)'
    },
    ghost: {
      background: 'var(--surface-soft)',
      color: 'var(--text-heading)'
    },
    solid: {
      background: 'var(--accent-strong)'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    title: label,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      width: d,
      height: d,
      border: 'none',
      borderRadius: 'var(--radius-pill)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
      transition: 'background var(--dur-fast) var(--ease-drift), color var(--dur-fast) var(--ease-drift)',
      ...variants[variant],
      ...(hover ? hovers[variant] : null),
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
function Dialog({
  open,
  title,
  children,
  onClose,
  actions,
  width = 440
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      background: 'rgba(38, 49, 74, 0.4)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width,
      maxWidth: '100%',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-lift)',
      padding: 'var(--space-6)',
      fontFamily: 'var(--font-body)',
      color: 'var(--text-body)',
      position: 'relative'
    }
  }, onClose && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    label: "Fermer",
    variant: "ghost",
    size: "sm",
    onClick: onClose,
    style: {
      position: 'absolute',
      top: 16,
      right: 16
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }), /*#__PURE__*/React.createElement("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  }))), title && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 12px',
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-xl)',
      color: 'var(--text-heading)',
      paddingRight: 32
    }
  }, title), /*#__PURE__*/React.createElement("div", null, children), actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      justifyContent: 'flex-end',
      marginTop: 'var(--space-5)'
    }
  }, actions)));
}
Dialog.Button = __ds_scope.Button;
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Input({
  label,
  hint,
  error,
  style,
  inputStyle,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-heading)'
    }
  }, label), /*#__PURE__*/React.createElement("input", _extends({
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      height: 'var(--control-height)',
      padding: '0 18px',
      borderRadius: 'var(--radius-pill)',
      border: `1px solid ${error ? 'var(--status-error)' : focus ? 'var(--border-focus)' : 'var(--border-strong)'}`,
      background: 'var(--surface-card)',
      color: 'var(--text-body)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-md)',
      outline: 'none',
      boxShadow: focus ? 'var(--focus-ring)' : 'var(--shadow-inset)',
      transition: 'box-shadow var(--dur-fast) var(--ease-drift), border-color var(--dur-fast) var(--ease-drift)',
      ...inputStyle
    }
  }, rest)), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-xs)',
      color: error ? 'var(--status-error)' : 'var(--text-muted)',
      paddingLeft: 18
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  name,
  checked,
  defaultChecked,
  onChange,
  value,
  style
}) {
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isOn = checked !== undefined ? checked : internal;
  const select = () => {
    if (checked === undefined) setInternal(true);
    onChange && onChange(value);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-md)',
      color: 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    checked: isOn,
    onChange: select,
    value: value,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      borderRadius: '50%',
      flexShrink: 0,
      border: `2px solid ${isOn ? 'var(--accent)' : 'var(--border-strong)'}`,
      background: 'var(--surface-card)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'border-color var(--dur-fast) var(--ease-drift)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--accent)',
      transform: isOn ? 'scale(1)' : 'scale(0)',
      transition: 'transform var(--dur-fast) var(--ease-drift)'
    }
  })), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function Select({
  label,
  options = [],
  style,
  selectStyle,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      fontFamily: 'var(--font-body)',
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 'var(--text-sm)',
      fontWeight: 'var(--weight-bold)',
      color: 'var(--text-heading)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      height: 'var(--control-height)',
      padding: '0 42px 0 18px',
      flex: 1,
      borderRadius: 'var(--radius-pill)',
      border: `1px solid ${focus ? 'var(--border-focus)' : 'var(--border-strong)'}`,
      background: 'var(--surface-card)',
      color: 'var(--text-body)',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-md)',
      outline: 'none',
      appearance: 'none',
      cursor: 'pointer',
      boxShadow: focus ? 'var(--focus-ring)' : 'none',
      transition: 'box-shadow var(--dur-fast) var(--ease-drift)',
      ...selectStyle
    }
  }, rest), options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value ?? o,
    value: o.value ?? o
  }, o.label ?? o))), /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--text-muted)",
    strokeWidth: "2.5",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      position: 'absolute',
      right: 16,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none'
    }
  }, /*#__PURE__*/React.createElement("polyline", {
    points: "6 9 12 15 18 9"
  }))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  label,
  checked,
  defaultChecked,
  onChange,
  style
}) {
  const [internal, setInternal] = React.useState(!!defaultChecked);
  const isOn = checked !== undefined ? checked : internal;
  const toggle = () => {
    if (checked === undefined) setInternal(!isOn);
    onChange && onChange(!isOn);
  };
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: 'pointer',
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-md)',
      color: 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: toggle,
    role: "switch",
    "aria-checked": isOn,
    tabIndex: 0,
    onKeyDown: e => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        toggle();
      }
    },
    style: {
      width: 46,
      height: 26,
      borderRadius: 'var(--radius-pill)',
      flexShrink: 0,
      background: isOn ? 'var(--accent)' : 'var(--lpm-ivory-300)',
      padding: 3,
      boxSizing: 'border-box',
      display: 'inline-flex',
      transition: 'background var(--dur-base) var(--ease-drift)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: '#fff',
      boxShadow: '0 1px 3px rgba(61,84,122,0.25)',
      transform: isOn ? 'translateX(20px)' : 'translateX(0)',
      transition: 'transform var(--dur-base) var(--ease-drift)'
    }
  })), label && /*#__PURE__*/React.createElement("span", {
    onClick: toggle
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// ui_kits/boutique/Chrome.jsx
try { (() => {
// Shared chrome: Wordmark, Header (with FR/EN toggle), ReassuranceBar, Footer, ProductPhoto.
const {
  IconButton,
  Tooltip
} = window.PetitNuageDesignSystem_f04838;

/* Yume lockup — tiny « MAISON » eyebrow over YUME in letterspaced serif caps. */
function Wordmark({
  size = 17,
  color = 'var(--lpm-ink-900)',
  maison = true,
  onClick
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: size * 0.14,
      cursor: onClick ? 'pointer' : 'default'
    }
  }, maison && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: Math.max(7, size * 0.4),
      letterSpacing: '0.52em',
      paddingLeft: '0.52em',
      textTransform: 'uppercase',
      color,
      opacity: 0.55,
      lineHeight: 1
    }
  }, "Maison"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: size * 1.18,
      letterSpacing: '0.3em',
      paddingLeft: '0.3em',
      textTransform: 'uppercase',
      color,
      lineHeight: 1,
      whiteSpace: 'nowrap'
    }
  }, "Yume"));
}
function CartIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "19",
    height: "19",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.75",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M3 6h18"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M16 10a4 4 0 0 1-8 0"
  }));
}
function LangToggle({
  lang,
  onChange
}) {
  const b = l => ({
    border: 'none',
    background: 'none',
    padding: '2px 4px',
    cursor: 'pointer',
    fontFamily: 'var(--font-body)',
    fontSize: 12,
    letterSpacing: '0.08em',
    fontWeight: lang === l ? 700 : 500,
    color: lang === l ? 'var(--text-heading)' : 'var(--text-faint)',
    textDecoration: lang === l ? 'underline' : 'none',
    textUnderlineOffset: 4
  });
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("button", {
    style: b('fr'),
    onClick: () => onChange('fr')
  }, "FR"), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--border-strong)',
      fontSize: 11
    }
  }, "\xB7"), /*#__PURE__*/React.createElement("button", {
    style: b('en'),
    onClick: () => onChange('en')
  }, "EN"));
}

/* One-line announcement bar — jouy-900, star glyph, calm copy. */
function AnnounceBar({
  t
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--lpm-jouy-900)',
      color: 'rgba(255,253,248,0.9)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 9,
      padding: '8px 16px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/decor-star.svg",
    alt: "",
    style: {
      width: 11,
      height: 11,
      display: 'block',
      opacity: 0.9
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12.5,
      letterSpacing: '0.06em',
      fontWeight: 500
    }
  }, t.announce));
}

/* 夢 (« yume », rêve) — discreet brand seal. Use sparingly: once per page at most. */
function YumeSeal({
  size = 26,
  tone = 'jouy',
  style
}) {
  const tones = {
    jouy: {
      border: '1px solid var(--lpm-jouy-500)',
      color: 'var(--lpm-jouy-700)'
    },
    inverse: {
      border: '1px solid rgba(255,253,248,0.45)',
      color: '#FFFDF8'
    },
    gold: {
      border: '1px solid var(--lpm-gold-700)',
      color: 'var(--lpm-gold-700)'
    }
  };
  const c = tones[tone] || tones.jouy;
  return /*#__PURE__*/React.createElement("span", {
    "aria-label": "yume \u2014 r\xEAve",
    style: {
      width: size,
      height: size,
      borderRadius: Math.round(size * 0.19),
      border: c.border,
      color: c.color,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'Noto Serif JP', serif",
      fontWeight: 500,
      fontSize: Math.round(size * 0.56),
      lineHeight: 1,
      flexShrink: 0,
      ...style
    }
  }, "\u5922");
}
function Header({
  t,
  lang,
  setLang,
  onNav,
  active,
  cartCount,
  onCart
}) {
  const link = i => ({
    fontFamily: 'var(--font-body)',
    fontWeight: 500,
    fontSize: 14,
    color: active === i ? 'var(--text-heading)' : 'var(--text-muted)',
    textDecoration: 'none',
    cursor: 'pointer',
    letterSpacing: '0.01em',
    borderBottom: active === i ? '1px solid var(--lpm-ink-500)' : '1px solid transparent',
    paddingBottom: 2
  });
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 20,
      background: 'rgba(250,247,240,0.94)',
      backdropFilter: 'blur(6px)',
      borderBottom: '1px solid var(--border-soft)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '18px 32px',
      display: 'grid',
      gridTemplateColumns: '1fr auto 1fr',
      alignItems: 'center',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      gap: 26
    }
  }, /*#__PURE__*/React.createElement("a", {
    style: link(0),
    onClick: () => onNav('home')
  }, t.nav[0]), /*#__PURE__*/React.createElement("a", {
    style: link(1),
    onClick: () => onNav('maison')
  }, t.nav[1]), /*#__PURE__*/React.createElement("a", {
    style: link(2),
    onClick: () => onNav('guide')
  }, t.nav[2])), /*#__PURE__*/React.createElement(Wordmark, {
    size: 19,
    onClick: () => onNav('home')
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      justifySelf: 'end'
    }
  }, /*#__PURE__*/React.createElement(LangToggle, {
    lang: lang,
    onChange: setLang
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Tooltip, {
    label: t.cartLabel
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: t.cartLabel,
    variant: "ghost",
    onClick: onCart
  }, /*#__PURE__*/React.createElement(CartIcon, null))), cartCount > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 0,
      right: -2,
      minWidth: 16,
      height: 16,
      borderRadius: 999,
      background: 'var(--accent)',
      color: '#FFFDF8',
      fontFamily: 'var(--font-body)',
      fontSize: 10,
      fontWeight: 700,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '0 4px'
    }
  }, cartCount)))));
}
function ReassuranceBar({
  t
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-soft)',
      borderBottom: '1px solid var(--border-soft)',
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '0 32px',
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)'
    }
  }, t.reassurance.map((x, i) => /*#__PURE__*/React.createElement("span", {
    key: x,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 12.5,
      fontWeight: 500,
      letterSpacing: '0.02em',
      color: 'var(--text-muted)',
      padding: '14px 18px',
      textAlign: 'center',
      borderLeft: i > 0 ? '1px solid var(--border-soft)' : 'none'
    }
  }, x))));
}
function Footer({
  t,
  onNav
}) {
  const a = {
    color: 'rgba(255,253,248,0.62)',
    textDecoration: 'none',
    cursor: 'pointer',
    fontSize: 14
  };
  const footerRoutes = [['home'], ['faq', 'faq', 'faq'], ['maison', 'guide']];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: 'var(--surface-inverse)',
      marginTop: 88
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '56px 32px',
      display: 'grid',
      gridTemplateColumns: '2fr 1fr 1fr 1fr',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: 16,
    color: "#FFFDF8"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'rgba(255,253,248,0.62)',
      maxWidth: 240,
      lineHeight: 1.6
    }
  }, t.footerBaseline), /*#__PURE__*/React.createElement(Fanions, {
    size: 8,
    style: {
      marginTop: 2,
      opacity: 0.85
    }
  })), t.footerCols.map(([title, links], ci) => /*#__PURE__*/React.createElement("div", {
    key: title,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      fontFamily: 'var(--font-body)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      color: 'rgba(255,253,248,0.4)',
      fontWeight: 600
    }
  }, title), links.map((l, li) => /*#__PURE__*/React.createElement("a", {
    key: l,
    style: a,
    onClick: onNav && footerRoutes[ci] && footerRoutes[ci][li] ? () => onNav(footerRoutes[ci][li]) : undefined
  }, l))))), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid rgba(255,253,248,0.14)',
      padding: '20px 32px 22px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      color: 'rgba(255,253,248,0.45)'
    }
  }, /*#__PURE__*/React.createElement(YumeSeal, {
    size: 20,
    tone: "inverse",
    style: {
      opacity: 0.65
    }
  }), t.legal));
}

/* Product packshot on a white ground (photos are white-background packshots). */
function ProductPhoto({
  src,
  alt,
  height = 300,
  radius = 'var(--radius-lg)',
  provisional,
  provisionalLabel,
  contain = true,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      height,
      borderRadius: radius,
      background: '#FFFFFF',
      border: '1px solid var(--border-soft)',
      position: 'relative',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...style
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: contain ? 'contain' : 'cover',
      display: 'block'
    }
  }), provisional && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: 10,
      right: 12,
      fontFamily: 'var(--font-body)',
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-faint)',
      background: 'rgba(255,255,255,0.85)',
      padding: '3px 8px',
      borderRadius: 4
    }
  }, provisionalLabel));
}

/* Fanions — the brand's micro-signature: three tiny flags (rose, straw, sage). */
function Fanions({
  size = 9,
  style
}) {
  const tri = c => ({
    width: 0,
    height: 0,
    borderLeft: `${size * 0.62}px solid transparent`,
    borderRight: `${size * 0.62}px solid transparent`,
    borderTop: `${size}px solid ${c}`
  });
  return /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      display: 'inline-flex',
      gap: 5,
      alignItems: 'flex-start',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: tri('var(--lpm-rose-300)')
  }), /*#__PURE__*/React.createElement("span", {
    style: tri('var(--lpm-straw-300)')
  }), /*#__PURE__*/React.createElement("span", {
    style: tri('var(--lpm-sage-300)')
  }));
}
Object.assign(window, {
  Wordmark,
  Header,
  ReassuranceBar,
  Footer,
  ProductPhoto,
  CartIcon,
  LangToggle,
  Fanions,
  AnnounceBar,
  YumeSeal
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/boutique/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/boutique/Editorial.jsx
try { (() => {
// Editorial pages: La maison (story) + Le guide du sommeil.
const {
  Button,
  Card
} = window.PetitNuageDesignSystem_f04838;
function EditorialHeader({
  eyebrow,
  title,
  intro
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640,
      margin: '0 auto',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      alignItems: 'center',
      padding: '72px 32px 0'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 12,
      fontFamily: 'var(--font-body)',
      fontSize: 12,
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      fontWeight: 600,
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement(Fanions, {
    size: 8
  }), " ", eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 52
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 17,
      color: 'var(--text-body)'
    }
  }, intro));
}
function MaisonScreen({
  t,
  onOpenCollection
}) {
  const m = t.maison;
  return /*#__PURE__*/React.createElement("main", {
    "data-screen-label": "La maison"
  }, /*#__PURE__*/React.createElement(EditorialHeader, {
    eyebrow: m.eyebrow,
    title: m.title,
    intro: m.intro
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '56px auto 0',
      padding: '0 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      borderRadius: 'var(--radius-xl)',
      overflow: 'hidden',
      border: '1px solid var(--border-soft)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/lifestyle-crib.png",
    alt: "",
    style: {
      width: '100%',
      height: 440,
      objectFit: 'cover',
      display: 'block'
    }
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '56px auto 0',
      padding: '0 32px',
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 22
    }
  }, m.blocks.map(([h, p], i) => /*#__PURE__*/React.createElement(Card, {
    key: i,
    variant: "outline",
    padding: "28px"
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 10px',
      fontFamily: 'var(--font-display)',
      fontSize: 24,
      fontWeight: 600,
      color: 'var(--text-heading)'
    }
  }, h), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 14.5,
      lineHeight: 1.7
    }
  }, p)))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 720,
      margin: '72px auto 0',
      padding: '0 32px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement(YumeSeal, {
    size: 28
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontStyle: 'italic',
      fontSize: 28,
      lineHeight: 1.4,
      color: 'var(--text-heading)'
    }
  }, m.quote), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: onOpenCollection
  }, t.heroCta))));
}
function GuideSommeilScreen({
  t,
  onOpenCollection
}) {
  const g = t.guideSommeil;
  return /*#__PURE__*/React.createElement("main", {
    "data-screen-label": "Guide du sommeil"
  }, /*#__PURE__*/React.createElement(EditorialHeader, {
    eyebrow: g.eyebrow,
    title: g.title,
    intro: g.intro
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 760,
      margin: '48px auto 0',
      padding: '0 32px',
      display: 'flex',
      flexDirection: 'column'
    }
  }, g.articles.map(([h, p], i) => /*#__PURE__*/React.createElement("article", {
    key: i,
    style: {
      padding: '28px 0',
      borderTop: i > 0 ? '1px solid var(--border-soft)' : 'none',
      display: 'grid',
      gridTemplateColumns: '52px 1fr',
      gap: 20,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 34,
      fontWeight: 500,
      color: 'var(--lpm-jouy-300)',
      lineHeight: 1
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 8px',
      fontFamily: 'var(--font-display)',
      fontSize: 25,
      fontWeight: 600,
      color: 'var(--text-heading)'
    }
  }, h), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 15.5,
      lineHeight: 1.7,
      maxWidth: 560
    }
  }, p))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 760,
      margin: '32px auto 0',
      padding: '0 32px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "soft",
    padding: "32px",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 24,
      color: 'var(--text-heading)'
    }
  }, t.guideTitle), /*#__PURE__*/React.createElement(Button, {
    onClick: onOpenCollection
  }, g.cta))));
}
function FaqItem({
  q,
  a,
  open,
  onToggle
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderBottom: '1px solid var(--border-soft)'
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: onToggle,
    style: {
      width: '100%',
      background: 'none',
      border: 'none',
      padding: '18px 4px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline',
      gap: 16,
      cursor: 'pointer',
      textAlign: 'left'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 21,
      fontWeight: 500,
      color: 'var(--text-heading)'
    }
  }, q), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 17,
      color: 'var(--text-faint)',
      flexShrink: 0
    }
  }, open ? '−' : '+')), open && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '0 0 20px',
      padding: '0 4px',
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      lineHeight: 1.7,
      maxWidth: 560,
      color: 'var(--text-body)'
    }
  }, a));
}
function FaqScreen({
  t
}) {
  const f = t.faq;
  const [openId, setOpenId] = React.useState('0-0');
  return /*#__PURE__*/React.createElement("main", {
    "data-screen-label": "Vos questions"
  }, /*#__PURE__*/React.createElement(EditorialHeader, {
    eyebrow: f.eyebrow,
    title: f.title,
    intro: f.intro
  }), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 760,
      margin: '40px auto 0',
      padding: '0 32px',
      display: 'flex',
      flexDirection: 'column',
      gap: 44
    }
  }, f.groups.map(([g, items], gi) => /*#__PURE__*/React.createElement("div", {
    key: g
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11.5,
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      fontWeight: 600,
      color: 'var(--text-muted)',
      paddingBottom: 10,
      borderBottom: '1px solid var(--lpm-ink-900)'
    }
  }, g), items.map(([q, a], qi) => {
    const id = gi + '-' + qi;
    return /*#__PURE__*/React.createElement(FaqItem, {
      key: id,
      q: q,
      a: a,
      open: openId === id,
      onToggle: () => setOpenId(openId === id ? null : id)
    });
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 760,
      margin: '48px auto 0',
      padding: '0 32px'
    }
  }, /*#__PURE__*/React.createElement(Card, {
    variant: "soft",
    padding: "22px 26px",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(YumeSeal, {
    size: 30
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14.5,
      lineHeight: 1.6
    }
  }, f.contact))));
}
Object.assign(window, {
  MaisonScreen,
  GuideSommeilScreen,
  FaqScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/boutique/Editorial.jsx", error: String((e && e.message) || e) }); }

// ui_kits/boutique/Home.jsx
try { (() => {
// Home — editorial, asymmetric layout. Numbered collection, full-bleed lifestyle, hairline guide.
const {
  Button,
  Badge,
  Card
} = window.PetitNuageDesignSystem_f04838;
const eyebrowStyle = {
  fontFamily: 'var(--font-body)',
  fontSize: 11.5,
  letterSpacing: 'var(--tracking-wide)',
  textTransform: 'uppercase',
  fontWeight: 600,
  color: 'var(--text-muted)'
};

/* Product as an editorial figure — no card box, photo + hairline + caption. */
function ProductFigure({
  p,
  i,
  lang,
  t,
  onOpen,
  offset
}) {
  const loc = p[lang];
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("figure", {
    onClick: () => onOpen(p),
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      margin: 0,
      cursor: 'pointer',
      marginTop: offset ? 56 : 0,
      transition: 'margin 0s'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      background: '#fff',
      overflow: 'hidden',
      aspectRatio: '4 / 4.6',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: p.img,
    alt: loc.name,
    style: {
      width: '88%',
      height: '88%',
      objectFit: 'contain',
      transition: 'transform 700ms var(--ease-drift)',
      transform: hover ? 'scale(1.035)' : 'none'
    }
  }), p.badge && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 16,
      left: 16,
      ...eyebrowStyle,
      color: 'var(--lpm-wool-700)'
    }
  }, p.badge[lang]), p.imgProvisional && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: 12,
      right: 14,
      fontFamily: 'var(--font-body)',
      fontSize: 10,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-faint)'
    }
  }, t.provisional)), /*#__PURE__*/React.createElement("figcaption", {
    style: {
      borderTop: '1px solid var(--lpm-ink-900)',
      marginTop: 18,
      paddingTop: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'baseline'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 27,
      fontWeight: 500,
      color: 'var(--text-heading)',
      fontStyle: hover ? 'italic' : 'normal'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--text-faint)',
      verticalAlign: 'super',
      marginRight: 8,
      fontStyle: 'normal'
    }
  }, String(i + 1).padStart(2, '0')), loc.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      fontWeight: 500,
      color: 'var(--text-heading)'
    }
  }, lang === 'fr' ? p.price : p.priceEn)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13,
      color: 'var(--text-muted)',
      marginTop: 3
    }
  }, p.dims, " \xB7 ", loc.age, " \xB7 ", loc.fabric)));
}
function HeroHeadline({
  t,
  lang
}) {
  // Italic accent on the last words — editorial, not template-like.
  const parts = [t.heroTitle1, t.heroTitle2];
  return /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 'clamp(56px, 7vw, 92px)',
      fontWeight: 500,
      lineHeight: 1.02,
      letterSpacing: '-0.01em'
    }
  }, parts[0], /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: 'italic',
      fontWeight: 400,
      color: 'var(--lpm-jouy-700)'
    }
  }, parts[1]));
}
function Hero({
  t,
  lang,
  variant
}) {
  if (variant === 'lifestyle' || variant === 'film') {
    return /*#__PURE__*/React.createElement("section", {
      style: {
        position: 'relative',
        minHeight: 600,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'flex-end'
      }
    }, variant === 'film' ? /*#__PURE__*/React.createElement("video", {
      src: "../../assets/products/coussin-moutons.mp4",
      autoPlay: true,
      muted: true,
      loop: true,
      playsInline: true,
      style: {
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }
    }) : /*#__PURE__*/React.createElement("img", {
      src: "../../assets/lifestyle-crib.png",
      alt: "",
      style: {
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        objectFit: 'cover'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, rgba(35,33,28,0.55), rgba(35,33,28,0) 55%)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        width: '100%',
        maxWidth: 'var(--container-max)',
        margin: '0 auto',
        padding: '0 32px 56px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        gap: 32
      }
    }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10,
        marginBottom: 14
      }
    }, /*#__PURE__*/React.createElement(YumeSeal, {
      size: 22,
      tone: "inverse"
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        ...eyebrowStyle,
        color: 'rgba(255,253,248,0.75)'
      }
    }, t.heroEyebrow)), /*#__PURE__*/React.createElement("h1", {
      style: {
        margin: 0,
        fontSize: 'clamp(48px, 6vw, 80px)',
        fontWeight: 500,
        lineHeight: 1.04,
        color: '#FFFDF8'
      }
    }, t.heroTitle)), /*#__PURE__*/React.createElement(Button, {
      size: "lg",
      style: {
        flexShrink: 0
      },
      onClick: () => window.scroll({
        top: document.getElementById('collection').offsetTop - 100,
        behavior: 'smooth'
      })
    }, t.heroCta)));
  }
  // Packshot — asymmetric: oversized headline crossing the grid, image offset right.
  return /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--surface-page)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '84px 32px 0',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...eyebrowStyle,
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(Fanions, {
    size: 8
  }), " ", t.heroEyebrow), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 2,
      maxWidth: 720
    }
  }, /*#__PURE__*/React.createElement(HeroHeadline, {
    t: t,
    lang: lang
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1.1fr',
      gap: 48,
      alignItems: 'start',
      marginTop: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 40,
      display: 'flex',
      flexDirection: 'column',
      gap: 26,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 17,
      maxWidth: 360,
      color: 'var(--text-body)'
    }
  }, t.heroSub), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 22,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    onClick: () => window.scroll({
      top: document.getElementById('collection').offsetTop - 100,
      behavior: 'smooth'
    })
  }, t.heroCta), /*#__PURE__*/React.createElement("a", {
    onClick: () => window.scroll({
      top: document.getElementById('guide').offsetTop - 100,
      behavior: 'smooth'
    }),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 600,
      color: 'var(--text-heading)',
      cursor: 'pointer',
      borderBottom: '1px solid var(--lpm-ink-900)',
      paddingBottom: 2
    }
  }, t.heroCta2))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: -72,
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: '#fff',
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 480
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: window.lpmProducts[1].img,
    alt: "",
    style: {
      width: '92%',
      height: '92%',
      objectFit: 'contain'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      ...eyebrowStyle,
      marginTop: 10,
      textAlign: 'right'
    }
  }, t.heroCaption)))));
}
function HomeScreen({
  lang,
  t,
  heroVariant = 'packshot',
  onOpenProduct
}) {
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Hero, {
    t: t,
    lang: lang,
    variant: heroVariant
  }), /*#__PURE__*/React.createElement(ReassuranceBar, {
    t: t
  }), /*#__PURE__*/React.createElement("section", {
    id: "collection",
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '84px 32px 0'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      marginBottom: 44,
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 44,
      fontWeight: 500
    }
  }, t.collTitle), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-muted)',
      fontSize: 15,
      maxWidth: 300,
      textAlign: 'right'
    }
  }, t.collSub)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 28
    }
  }, window.lpmProducts.map((p, i) => /*#__PURE__*/React.createElement(ProductFigure, {
    key: p.id,
    p: p,
    i: i,
    lang: lang,
    t: t,
    onOpen: onOpenProduct,
    offset: i === 1
  })))), heroVariant === 'packshot' && /*#__PURE__*/React.createElement("section", {
    style: {
      position: 'relative',
      marginTop: 96,
      minHeight: 520,
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/lifestyle-crib.png",
    alt: "",
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to right, rgba(35,33,28,0.5), rgba(35,33,28,0.05) 60%)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '64px 32px',
      width: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 440,
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      ...eyebrowStyle,
      color: 'rgba(255,253,248,0.7)'
    }
  }, t.lifestyleEyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontSize: 40,
      fontWeight: 500,
      color: '#FFFDF8',
      lineHeight: 1.08
    }
  }, t.lifestyleTitle), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15.5,
      color: 'rgba(255,253,248,0.85)'
    }
  }, t.lifestyleText), /*#__PURE__*/React.createElement("a", {
    onClick: () => onOpenProduct(window.lpmProducts[1]),
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      fontWeight: 600,
      color: '#FFFDF8',
      cursor: 'pointer',
      borderBottom: '1px solid rgba(255,253,248,0.7)',
      paddingBottom: 2,
      marginTop: 6
    }
  }, lang === 'fr' ? 'Voir Le Moyen' : 'See The Medium')))), /*#__PURE__*/React.createElement("section", {
    id: "guide",
    style: {
      maxWidth: 880,
      margin: '96px auto 0',
      padding: '0 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...eyebrowStyle,
      textAlign: 'center',
      marginBottom: 10
    }
  }, lang === 'fr' ? 'Le guide des tailles' : 'Size guide'), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 36px',
      fontSize: 40,
      fontWeight: 500,
      textAlign: 'center'
    }
  }, t.guideTitle), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--lpm-ink-900)'
    }
  }, t.guideRows.map((row, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    onClick: () => onOpenProduct(window.lpmProducts[i]),
    style: {
      display: 'grid',
      gridTemplateColumns: '1.2fr 1fr 0.8fr 1.6fr auto',
      gap: 18,
      alignItems: 'baseline',
      padding: '20px 4px',
      borderBottom: '1px solid var(--border-soft)',
      cursor: 'pointer'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 24,
      fontWeight: 500,
      color: 'var(--text-heading)'
    }
  }, row[0]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-body)'
    }
  }, row[1]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-body)'
    }
  }, row[2]), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-muted)'
    }
  }, row[3]), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14,
      color: 'var(--text-faint)'
    }
  }, "\u2192"))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: 'var(--lpm-sage-100)',
      marginTop: 96
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '72px 32px 78px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement(YumeSeal, {
    size: 24
  }), /*#__PURE__*/React.createElement("span", {
    style: eyebrowStyle
  }, t.nightEyebrow)), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '0 0 44px',
      fontSize: 40,
      fontWeight: 500,
      maxWidth: 540
    }
  }, t.nightTitle), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 28
    }
  }, t.nightValues.map(([h, p], i) => /*#__PURE__*/React.createElement("div", {
    key: h,
    style: {
      borderTop: '1px solid var(--lpm-ink-900)',
      paddingTop: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11,
      fontWeight: 600,
      color: 'var(--lpm-ink-500)',
      letterSpacing: '0.14em',
      marginBottom: 8
    }
  }, String(i + 1).padStart(2, '0')), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '0 0 8px',
      fontFamily: 'var(--font-display)',
      fontSize: 23,
      fontWeight: 600,
      color: 'var(--text-heading)'
    }
  }, h), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 14.5,
      lineHeight: 1.7,
      maxWidth: 320
    }
  }, p)))))));
}
window.HomeScreen = HomeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/boutique/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/boutique/Product.jsx
try { (() => {
// Product detail: gallery, fabric, qty, add to cart, tabs, review.
const {
  Button,
  Badge,
  Card,
  Tabs,
  Select
} = window.PetitNuageDesignSystem_f04838;
function ProductScreen({
  product,
  lang,
  t,
  onBack,
  onAdd
}) {
  const p = product;
  const loc = p[lang];
  const [tab, setTab] = React.useState(t.tabs[0]);
  React.useEffect(() => {
    setTab(t.tabs[0]);
  }, [lang]);
  const gallery = [p.img, '../../assets/detail-toile.png', '../../assets/lifestyle-crib.png'];
  const [mainImg, setMainImg] = React.useState(p.img);
  React.useEffect(() => {
    setMainImg(p.img);
  }, [p]);
  const tabContent = {
    [t.tabs[0]]: loc.desc,
    [t.tabs[1]]: t.care,
    [t.tabs[2]]: t.shipping
  };
  return /*#__PURE__*/React.createElement("main", {
    style: {
      maxWidth: 'var(--container-max)',
      margin: '0 auto',
      padding: '36px 32px 0'
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: onBack,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      fontFamily: 'var(--font-body)',
      fontSize: 13.5,
      fontWeight: 500,
      color: 'var(--text-muted)',
      cursor: 'pointer',
      marginBottom: 26
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m12 19-7-7 7-7"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M19 12H5"
  })), t.back), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1.15fr 1fr',
      gap: 56,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(ProductPhoto, {
    src: mainImg,
    alt: loc.name,
    height: 440,
    radius: "var(--radius-xl)",
    provisional: p.imgProvisional && mainImg === p.img,
    provisionalLabel: t.provisional,
    contain: mainImg === p.img
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 12
    }
  }, gallery.map((g, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    onClick: () => setMainImg(g),
    style: {
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      border: `1px solid ${mainImg === g ? 'var(--border-focus)' : 'var(--border-soft)'}`,
      cursor: 'pointer',
      height: 92,
      background: '#fff'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: g,
    alt: "",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      alignItems: 'flex-start'
    }
  }, p.badge && /*#__PURE__*/React.createElement(Badge, {
    tone: p.badge.tone
  }, p.badge[lang]), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      fontSize: 46
    }
  }, loc.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 14.5,
      color: 'var(--text-muted)'
    }
  }, p.dims, " \xB7 ", loc.age)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-body)',
      fontWeight: 600,
      fontSize: 26,
      color: 'var(--text-heading)'
    }
  }, lang === 'fr' ? p.price : p.priceEn), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      borderTop: '1px solid var(--border-soft)',
      paddingTop: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 11.5,
      letterSpacing: 'var(--tracking-wide)',
      textTransform: 'uppercase',
      fontWeight: 600,
      color: 'var(--text-muted)'
    }
  }, t.fabricLabel), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 19,
      color: 'var(--text-heading)'
    }
  }, loc.fabric)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'flex-end'
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: t.qty,
    options: ['1', '2', '3'],
    style: {
      width: 100
    }
  }), /*#__PURE__*/React.createElement(Button, {
    size: "lg",
    style: {
      flex: 1
    },
    onClick: () => onAdd(p)
  }, t.addToCart)), /*#__PURE__*/React.createElement(Card, {
    variant: "soft",
    padding: "4px 20px",
    style: {
      borderRadius: 'var(--radius-md)'
    }
  }, t.productReassurance.map((line, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      fontFamily: 'var(--font-body)',
      fontSize: 13.5,
      fontWeight: 500,
      color: 'var(--text-body)',
      padding: '10px 0',
      borderTop: i > 0 ? '1px solid rgba(35,33,28,0.07)' : 'none'
    }
  }, line))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    tabs: t.tabs,
    active: tab,
    onChange: setTab
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-body)',
      fontSize: 15,
      lineHeight: 1.7,
      maxWidth: 470
    }
  }, tabContent[tab])), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: '1px solid var(--border-soft)',
      paddingTop: 18,
      fontFamily: 'var(--font-display)',
      fontSize: 18,
      fontStyle: 'italic',
      color: 'var(--text-body)',
      lineHeight: 1.45
    }
  }, t.review))));
}
window.ProductScreen = ProductScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/boutique/Product.jsx", error: String((e && e.message) || e) }); }

// ui_kits/boutique/data.js
try { (() => {
// Maison Yume — catalogue + bilingual strings (FR default, EN).
// Real product data from the production site (petit-nuage local folder / Shopify-ready).
window.lpmProducts = [{
  id: 'petit',
  img: '../../assets/products/coussin-mouton.jpg',
  dims: '13 × 30 cm',
  price: '32 €',
  priceEn: '€32',
  fr: {
    name: 'Le Petit',
    age: 'Nouveau-nés · 0–1 an',
    fabric: 'Velours « Mouton rêveur »',
    desc: "Le plus petit format, idéal pour les nouveau-nés. Un doux mouton aquarelle endormi sur son nuage, avec ses petits fanions colorés sur le côté. Fibre de bambou naturellement douce, lavable en machine."
  },
  en: {
    name: 'The Small',
    age: 'Newborns · 0–1 year',
    fabric: '“Dreaming sheep” velvet',
    desc: 'Our smallest size, ideal for newborns. A soft watercolour sheep asleep on its cloud, with little colourful bunting on the side. Naturally soft bamboo fibre, machine washable.'
  }
}, {
  id: 'moyen',
  img: '../../assets/products/coussin-moyen-toile.jpg',
  dims: '18 × 38 cm',
  badge: {
    tone: 'wool',
    fr: 'Le plus aimé',
    en: 'Most loved'
  },
  price: '42 €',
  priceEn: '€42',
  fr: {
    name: 'Le Moyen',
    age: 'Tout-petits · 1–3 ans',
    fabric: 'Toile de Jouy « Bergerie »',
    desc: "Notre format le plus aimé, parfait pour les tout-petits. Le même mouton rêveur sur son nuage étoilé, à câliner pour les histoires du soir. Fibre de bambou naturellement douce, lavable en machine."
  },
  en: {
    name: 'The Medium',
    age: 'Toddlers · 1–3 years',
    fabric: '“Bergerie” toile de Jouy',
    desc: 'Our most-loved size, perfect for toddlers. The same dreamy sheep on its starry cloud, made for bedtime stories and cuddles. Naturally soft bamboo fibre, machine washable.'
  }
}, {
  id: 'grand',
  img: '../../assets/products/coussin-mouton.jpg',
  dims: '23 × 53 cm',
  price: '54 €',
  priceEn: '€54',
  fr: {
    name: 'Le Grand',
    age: 'Enfants · dès 3 ans',
    fabric: 'Velours « Mouton rêveur »',
    desc: "Le grand format à serrer dans les bras, pour les enfants à partir de 3 ans. Le mouton et son nuage, en grand, pour le lit comme pour le canapé. Fibre de bambou naturellement douce, lavable en machine."
  },
  en: {
    name: 'The Large',
    age: 'Children · 3 years and up',
    fabric: '“Dreaming sheep” velvet',
    desc: 'The big huggable size, for children from 3 years. The sheep and its cloud, supersized, for beds and sofas alike. Naturally soft bamboo fibre, machine washable.'
  }
}];
window.lpmT = {
  fr: {
    announce: 'Livraison offerte dès 50 €',
    nav: ['Les coussins', 'La maison', 'Le guide du sommeil'],
    cartLabel: 'Votre panier',
    langOther: 'EN',
    reassurance: ['Fibre de bambou naturelle', 'Doux pour la peau', 'Lavable en machine', 'Livraison offerte dès 50 €'],
    heroEyebrow: 'Fibre de bambou · maison française',
    heroTitle1: 'De doux rêves,',
    heroTitle2: 'petits moutons',
    heroSub: 'Un tendre coussin mouton endormi sur son nuage, en trois tailles, du nouveau-né au grand enfant. En fibre de bambou, naturellement douce et respirante.',
    heroCta: 'Découvrir les coussins',
    heroCta2: 'Le guide des tailles',
    heroCaption: 'Le Moyen — toile de Jouy « Bergerie »',
    heroTitle: 'De doux rêves, petits moutons',
    lifestyleEyebrow: 'Dans leurs chambres',
    lifestyleTitle: 'Dessiné pour être le plus beau du lit',
    lifestyleText: 'Notre mouton rêveur dort sur son nuage, sous une lune dorée — un dessin tendre qui apaise les soirs.',
    storyEyebrow: 'La maison',
    storyTitle: 'Pensé pour les petits, fait pour durer',
    storyText: 'Chaque coussin est pensé en France : fibre de bambou naturellement douce, coutures soignées, housse lavable. Un compagnon conçu pour durer toutes les années de la chambre d’enfant.',
    collTitle: 'Un mouton, trois tailles',
    collSub: 'Le même tendre compagnon, à la bonne taille pour chaque âge.',
    filmEyebrow: 'En mouvement',
    filmTitle: 'Voyez-les prendre vie',
    nightEyebrow: 'Notre promesse',
    nightTitle: 'Pensé pour les petits, fait pour durer',
    nightValues: [['Fibre de bambou', 'Une fibre naturelle, soyeuse et respirante — douce pour la peau délicate des tout-petits.'], ['Lavable en machine', 'Coutures soignées, housse qui passe en machine. La vie avec un enfant, on connaît.'], ['Fait pour durer', 'Un compagnon conçu pour traverser plusieurs enfances, du berceau au grand lit.']],
    guideTitle: 'Quelle taille pour votre enfant ?',
    guideRows: [['Le Petit', '13 × 30 cm', '0–1 an', 'Le format berceau, tout en douceur'], ['Le Moyen', '18 × 38 cm', '1–3 ans', 'Le plus aimé — histoires du soir et câlins'], ['Le Grand', '23 × 53 cm', 'dès 3 ans', 'Le grand format à serrer dans les bras']],
    guideCols: ['Modèle', 'Dimensions', 'Âge', ''],
    clubEyebrow: 'Le club Yume',
    clubTitle: 'Restons en contact',
    clubText: 'Nouveautés, petites séries et jolies attentions — directement dans votre boîte mail.',
    clubPlaceholder: 'Votre adresse e-mail',
    clubCta: 'S’inscrire',
    clubNote: 'Pas de spam, promis.',
    clubDone: 'Merci ! À très vite.',
    addToCart: 'Ajouter au panier',
    qty: 'Quantité',
    size: 'Dimensions',
    fabricLabel: 'La matière',
    added: 'Ajouté au panier',
    productReassurance: ['Livraison offerte dès 50 € — expédié sous 48 h', 'Fibre de bambou, naturellement douce et respirante', 'Housse lavable en machine à 30 °C'],
    back: 'Retour aux coussins',
    tabs: ['Description', 'Entretien', 'Livraison'],
    care: 'Housse lavable en machine à 30 °C. Séchage à l’air libre — le garnissage retrouve son gonflant en quelques heures.',
    shipping: 'Expédition sous 48 h. Livraison offerte dès 50 €, retours possibles pendant 30 jours.',
    review: '« Le Moyen ne quitte plus le lit d’Anna. On aurait dû commencer par là. » — Claire, maman d’Anna, 2 ans',
    cartEmpty: 'Votre panier est vide, pour l’instant.',
    continueShopping: 'Poursuivre la visite',
    checkout: 'Passer commande',
    footerBaseline: 'Coussins moutons pour enfants, pensés en France avec tendresse.',
    footerCols: [['La boutique', ['Les coussins', 'Cartes cadeaux']], ['L’aide', ['Livraison & retours', 'Entretien', 'Nous écrire']], ['La maison', ['Notre histoire', 'Le guide du sommeil', 'Presse']]],
    legal: '© 2026 Maison Yume — fait avec soin',
    maison: {
      eyebrow: 'La maison',
      title: 'Une maison française, née d’une chambre d’enfant',
      intro: 'Yume — « rêve » en japonais — est née d’un constat simple : il n’existait pas de beau coussin pour enfants. Trop synthétiques, trop criards. Nous avons voulu un objet juste — sain, durable, et beau dans la chambre.',
      blocks: [['Le mouton rêveur', 'Notre mouton aquarelle dort sur son nuage, sous une lune dorée. Un dessin tendre, jamais criard, qui apaise les soirs.'], ['La fibre de bambou', 'Naturellement douce, respirante et thermorégulante — elle reste fraîche et soyeuse contre la peau délicate des petits.'], ['Les fanions', 'Les petits fanions de coton colorés, posés un à un sur le côté, sont notre signature. À mordiller du bout des doigts.']],
      quote: '« Un bel objet pour de doux rêves — rien de plus, rien de moins. »'
    },
    guideSommeil: {
      eyebrow: 'Le guide du sommeil',
      title: 'Bien dormir, ça s’apprend doucement',
      intro: 'Quelques repères simples pour accompagner le sommeil de votre enfant — sans dogme, sans angoisse.',
      articles: [['Chaque âge a son format', 'Du berceau au grand lit, le bon coussin est celui qui suit l’enfant : tout doux et discret pour les premiers mois, plus enveloppant quand viennent les histoires du soir. Suivez toujours les recommandations de votre pédiatre.'], ['La bonne matière', 'La fibre de bambou respire et régule la température — l’enfant reste au frais l’été, au chaud l’hiver. Et elle se lave, souvent.'], ['Le rituel du soir', 'Une heure régulière, une lumière chaude, une histoire. Les enfants dorment mieux dans la répétition — et avec un compagnon qu’ils aiment.'], ['L’entretien, sans y penser', 'Housse lavée à 30 °C une fois par mois, garnissage aéré à chaque changement de draps. C’est tout.']],
      cta: 'Découvrir les trois tailles'
    },
    faq: {
      eyebrow: 'Vos questions',
      title: 'On vous répond',
      intro: 'Les réponses aux questions qu’on nous pose le plus souvent. Il en manque une ? Écrivez-nous, on répond vite.',
      groups: [['Général', [['Où sont fabriqués vos coussins ?', 'Ils sont dessinés en France. La toile de Jouy « Bergerie » est tissée en France ; la fibre de bambou est certifiée OEKO-TEX Standard 100.'], ['La livraison', 'Expédition sous 48 h depuis nos ateliers. Livraison offerte dès 50 €, en France métropolitaine.'], ['Les retours', 'Vous avez 30 jours pour changer d’avis. Les retours sont offerts — le coussin doit simplement nous revenir propre et complet.']]], ['Les coussins', [['Pourquoi la fibre de bambou ?', 'Parce qu’elle est naturellement douce, respirante et thermorégulante : fraîche l’été, chaude l’hiver. Idéale contre la peau délicate des petits — et c’est la matière de nos housses.'], ['Quelle taille choisir ?', 'Le Petit (13 × 30 cm) pour les 0–1 an, Le Moyen (18 × 38 cm) pour les 1–3 ans, Le Grand (23 × 53 cm) dès 3 ans. Le guide du sommeil détaille chaque âge.'], ['À partir de quel âge ?', 'Chaque enfant est différent : suivez toujours les recommandations de votre pédiatre, en particulier avant 2 ans où le coussin accompagne les moments d’éveil, pas la nuit.'], ['Comment l’entretenir ?', 'Housse lavable en machine à 30 °C, séchage à l’air libre. Le garnissage retrouve son gonflant en quelques heures.']]], ['Votre commande', [['Puis-je l’offrir ?', 'Bien sûr. Chaque commande peut partir en emballage cadeau, avec un petit mot manuscrit si vous nous le confiez.'], ['Ma commande n’est pas arrivée', 'Écrivez-nous avec votre numéro de commande : nous répondons sous 24 h ouvrées et nous ne vous laissons jamais sans solution.']]]],
      contact: 'Une autre question ? Écrivez-nous à bonjour@maisonyume.fr — nous répondons sous 24 h.'
    }
  },
  en: {
    announce: 'Free delivery over €50',
    nav: ['The pillows', 'The house', 'The sleep guide'],
    cartLabel: 'Your bag',
    langOther: 'FR',
    reassurance: ['Natural bamboo fibre', 'Gentle on skin', 'Machine washable', 'Free delivery over €50'],
    heroEyebrow: 'Bamboo fibre · French maison',
    heroTitle1: 'Sweet dreams,',
    heroTitle2: 'little sheep',
    heroSub: 'A tender sheep pillow asleep on its cloud, in three sizes, from newborn to big kid. In bamboo fibre, naturally soft and breathable.',
    heroCta: 'Discover the pillows',
    heroCta2: 'Size guide',
    heroCaption: 'The Medium — “Bergerie” toile de Jouy',
    heroTitle: 'Sweet dreams, little sheep',
    lifestyleEyebrow: 'In their bedrooms',
    lifestyleTitle: 'Designed to be the prettiest thing on the bed',
    lifestyleText: 'Our dreaming sheep sleeps on its cloud, under a golden moon — a tender drawing that soothes the evenings.',
    storyEyebrow: 'The house',
    storyTitle: 'Designed for little ones, made to last',
    storyText: 'Every pillow is designed in France: naturally soft bamboo fibre, careful seams, a washable cover. A companion made to last all the years of the children’s bedroom.',
    collTitle: 'One sheep, three sizes',
    collSub: 'The same tender companion, at the right size for every age.',
    filmEyebrow: 'In motion',
    filmTitle: 'See them come to life',
    nightEyebrow: 'Our promise',
    nightTitle: 'Designed for little ones, made to last',
    nightValues: [['Bamboo fibre', 'A natural fibre, silky and breathable — gentle on the delicate skin of little ones.'], ['Machine washable', 'Careful seams, a cover that goes in the machine. Life with a child — we know.'], ['Made to last', 'A companion built to cross several childhoods, from cradle to big bed.']],
    guideTitle: 'Which size for your child?',
    guideRows: [['The Small', '13 × 30 cm', '0–1 year', 'The cradle size, all softness'], ['The Medium', '18 × 38 cm', '1–3 years', 'Most loved — bedtime stories and cuddles'], ['The Large', '23 × 53 cm', '3 and up', 'The big huggable size']],
    guideCols: ['Model', 'Dimensions', 'Age', ''],
    clubEyebrow: 'The Yume club',
    clubTitle: 'Let’s stay in touch',
    clubText: 'New arrivals, small series and lovely attentions — straight to your inbox.',
    clubPlaceholder: 'Your email address',
    clubCta: 'Sign up',
    clubNote: 'No spam, promise.',
    clubDone: 'Thank you! See you soon.',
    addToCart: 'Add to bag',
    qty: 'Quantity',
    size: 'Dimensions',
    fabricLabel: 'The fabric',
    added: 'Added to your bag',
    productReassurance: ['Free delivery over €50 — ships within 48 h', 'Bamboo fibre, naturally soft and breathable', 'Cover machine-washable at 30 °C'],
    back: 'Back to the pillows',
    tabs: ['Description', 'Care', 'Delivery'],
    care: 'Cover machine-washable at 30 °C. Air-dry — the filling regains its loft within hours.',
    shipping: 'Ships within 48 h. Free delivery over €50, returns within 30 days.',
    review: '“The Medium never leaves Anna’s bed anymore. We should have started here.” — Claire, mother of Anna, 2',
    cartEmpty: 'Your bag is empty, for now.',
    continueShopping: 'Keep browsing',
    checkout: 'Checkout',
    footerBaseline: 'Sheep pillows for children, designed in France with tenderness.',
    footerCols: [['The shop', ['The pillows', 'Gift cards']], ['Help', ['Delivery & returns', 'Care', 'Write to us']], ['The house', ['Our story', 'The sleep guide', 'Press']]],
    legal: '© 2026 Maison Yume — made with care',
    maison: {
      eyebrow: 'The house',
      title: 'A French maison, born in a child’s bedroom',
      intro: 'Yume — “dream” in Japanese — was born of a simple observation: there was no beautiful pillow for children. Too synthetic, too loud. We wanted a just object — healthy, durable, and beautiful in the room.',
      blocks: [['The dreaming sheep', 'Our watercolour sheep sleeps on its cloud, under a golden moon. A tender drawing, never loud, that soothes the evenings.'], ['Bamboo fibre', 'Naturally soft, breathable and temperature-regulating — it stays cool and silky against delicate skin.'], ['The bunting', 'The little cotton flags, set one by one along the side, are our signature. For small fingers to fiddle with.']],
      quote: '“A beautiful object for sweet dreams — nothing more, nothing less.”'
    },
    guideSommeil: {
      eyebrow: 'The sleep guide',
      title: 'Sleeping well is learned gently',
      intro: 'A few simple landmarks to accompany your child’s sleep — no dogma, no anxiety.',
      articles: [['Every age has its size', 'From cradle to big bed, the right pillow follows the child: soft and discreet for the first months, more enveloping when bedtime stories begin. Always follow your paediatrician’s advice.'], ['The right material', 'Bamboo fibre breathes and regulates temperature — cool in summer, warm in winter. And it washes, often.'], ['The evening ritual', 'A regular hour, a warm light, a story. Children sleep better in repetition — and with a companion they love.'], ['Care, without thinking about it', 'Cover washed at 30 °C once a month, filling aired at every change of sheets. That’s all.']],
      cta: 'Discover the three sizes'
    },
    faq: {
      eyebrow: 'Your questions',
      title: 'We answer',
      intro: 'Answers to the questions we hear most often. Missing one? Write to us — we reply quickly.',
      groups: [['General', [['Where are your pillows made?', 'They are designed in France. The “Bergerie” toile de Jouy is woven in France; the bamboo fibre is OEKO-TEX Standard 100 certified.'], ['Delivery', 'Ships within 48 h from our workshops. Free delivery over €50 in mainland France.'], ['Returns', 'You have 30 days to change your mind. Returns are free — the pillow simply needs to come back clean and complete.']]], ['The pillows', [['Why bamboo fibre?', 'Because it is naturally soft, breathable and temperature-regulating: cool in summer, warm in winter. Ideal against the delicate skin of little ones — and it is the fabric of our covers.'], ['Which size should I choose?', 'The Small (13 × 30 cm) for 0–1 year, The Medium (18 × 38 cm) for 1–3 years, The Large (23 × 53 cm) from age 3. The sleep guide details every age.'], ['From what age?', 'Every child is different: always follow your paediatrician’s advice — especially before age 2, when the pillow is for waking moments, not the night.'], ['How do I care for it?', 'Cover machine-washable at 30 °C, air-dry. The filling regains its loft within hours.']]], ['Your order', [['Can I gift it?', 'Of course. Every order can leave gift-wrapped, with a handwritten note if you share one with us.'], ['My order hasn’t arrived', 'Write to us with your order number: we reply within 24 working hours and never leave you without a solution.']]]],
      contact: 'Another question? Write to us at bonjour@maisonyume.fr — we reply within 24 h.'
    }
  }
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/boutique/data.js", error: String((e && e.message) || e) }); }

// ui_kits/boutique/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/boutique/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

})();
