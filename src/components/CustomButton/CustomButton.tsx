import { Button, ButtonProps } from "@chakra-ui/react";
import { ReactNode } from "react";

interface CustomButtonProps extends ButtonProps {
  children: ReactNode;
  borderColor?: string;
  fontSize?: string; // Add fontSize prop
  padding?: string; // Add padding prop
}

const CustomButton: React.FC<CustomButtonProps> = ({
  children,
  borderColor = "black",
  fontSize = "16px", // Default font size for normal buttons
  padding = "0.5rem 1rem", // Default padding for normal buttons
  ...props
}) => {
  return (
    <Button
      {...props}
      position="relative"
      padding={padding} // Use padding prop here
      border="none"
      fontSize={fontSize} // Use fontSize prop here
      borderRadius="0"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg={props.bg || "gray.200"}
      color={props.color || "black"}
      overflow="visible"
      minHeight="40px" // Minimum height for consistency
      _hover={{
        bg: "gray.300",
        _before: {
          backgroundColor: "gray.300",
        },
        _after: {
          backgroundColor: "gray.300",
        },
      }}
      _before={{
        content: '""',
        position: "absolute",
        left: `-${parseFloat(padding.split(" ")[1]) + 5}px`, // Adjust according to left padding
        top: "50%",
        transform: "translateY(-50%)",
        height: "100%", // Set height to match button
        width: "10px",
        backgroundColor: props.bg || "gray.200",
        maskImage: "url('/assets/ButtonLeftBorder.svg')",
        maskSize: "contain",
        maskRepeat: "no-repeat",
        maskPosition: "center",
        transition: "background-color 0.2s ease",
      }}
      _after={{
        content: '""',
        position: "absolute",
        right: `-${parseFloat(padding.split(" ")[1]) + 4.8}px`, // Adjust according to right padding
        top: "50%",
        transform: "translateY(-50%)",
        height: "100%", // Set height to match button
        width: "10px",
        backgroundColor: props.bg || "gray.200",
        maskImage: "url('/assets/ButtonRightBorder.svg')",
        maskSize: "contain",
        maskRepeat: "no-repeat",
        maskPosition: "center",
        transition: "background-color 0.2s ease",
      }}
    >
      {children}
    </Button>
  );
};

export default CustomButton;
