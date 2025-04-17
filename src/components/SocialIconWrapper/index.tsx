import React, {FC, ReactNode} from "react";

interface SocialIconWrapperProps {
    children: ReactNode
    bgcolor: String
}

const SocialIconWrapper: FC<SocialIconWrapperProps> = ({ children, bgcolor }: SocialIconWrapperProps) => {
    return (
        <>
            <span style={{
                borderRadius: '2.6rem',
                cursor: 'pointer',
                fontSize: '1.3rem',
                lineHeight: '2.9rem',
                position: 'relative',
                textAlign: 'center',
                WebkitUserSelect: 'none',
                MozUserSelect: 'none',
                msUserSelect: 'none',
                userSelect: 'none',
                width: '42px',
                height: '42px',
                margin: '0 5px 10px',
                backgroundColor: `${bgcolor}`,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }} className="hover:scale-110 translate-x-2 transition ease-in-out duration-300">
                {children}
            </span>
        </>
    );
}

export default SocialIconWrapper;