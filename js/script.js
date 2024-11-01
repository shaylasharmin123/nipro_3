$form-validation-states: (
  "valid": (
    "color": var(--#{$prefix}form-valid-color),
    "icon": $form-feedback-icon-valid,
    "tooltip-color": #fff,
    "tooltip-bg-color": var(--#{$prefix}success),
    "focus-box-shadow": 0 0 $input-btn-focus-blur $input-focus-width rgba(var(--#{$prefix}success-rgb), $input-btn-focus-color-opacity),
    "border-color": var(--#{$prefix}form-valid-border-color),
  ),
  "invalid": (
    "color": var(--#{$prefix}form-invalid-color),
    "icon": $form-feedback-icon-invalid,
    "tooltip-color": #fff,
    "tooltip-bg-color": var(--#{$prefix}danger),
    "focus-box-shadow": 0 0 $input-btn-focus-blur $input-focus-width rgba(var(--#{$prefix}danger-rgb), $input-btn-focus-color-opacity),
    "border-color": var(--#{$prefix}form-invalid-border-color),
  )
);