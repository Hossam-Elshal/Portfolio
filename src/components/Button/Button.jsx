export default function Button({
    text,
    onClick,
    variant = "primary",
    size = "md",
    shape = "rounded",
    icon = null, // Optional icon
}) {
const baseStyles = "font-semibold transition-all duration-300 focus:outline-none";

// Sizes
const sizeStyles = {
    sm: "px-3 py-1 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
};

// Variants (Colors)
const variantStyles = {
    primary: "bg-blue-500 text-white hover:bg-blue-600",
    secondary: "bg-gray-500 text-white hover:bg-gray-600",
    success: "bg-green-500 text-white hover:bg-green-600",
    danger: "bg-red-500 text-white hover:bg-red-600",
};

// Shapes
const shapeStyles = {
    rounded: "rounded-lg",
    square: "rounded-none",
    pill: "rounded-full",
    circle: "rounded-full w-10 h-10 flex items-center justify-center",
};

return (
    <button
    onClick={onClick}
    className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${shapeStyles[shape]}`}
    >
    {icon ? icon : text}
    </button>
);
}

    //   {/* Different Shapes */}
    //   <Button text="Rounded" variant="primary" shape="rounded" />
    //   <Button text="Square" variant="secondary" shape="square" />
    //   <Button text="Pill" variant="success" shape="pill" />
    //   <Button icon={<FiStar />} variant="danger" shape="circle" />

    //   {/* Different Sizes */}
    //   <Button text="Small" variant="primary" size="sm" />
    //   <Button text="Medium" variant="secondary" size="md" />
    //   <Button text="Large" variant="success" size="lg" />



