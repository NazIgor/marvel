const Spinner=()=>{
    const styleSvg={
        margin: "0 auto", 
        background: 'none',
        display: 'block',
        shapeRendering: 'auto'
    } 
    return(
        <>            
        <svg style={styleSvg}  viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <g transform="rotate(0 50 50)">
            <rect x="47" y="18.5" rx="3" ry="8.5" width="6" height="17" fill="#9f1010">
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.5384615384615383s" begin="-1.3986013986013985s" repeatCount="indefinite"></animate>
            </rect>
            </g><g transform="rotate(32.72727272727273 50 50)">
            <rect x="47" y="18.5" rx="3" ry="8.5" width="6" height="17" fill="#9f1010">
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.5384615384615383s" begin="-1.2587412587412588s" repeatCount="indefinite"></animate>
            </rect>
            </g><g transform="rotate(65.45454545454545 50 50)">
            <rect x="47" y="18.5" rx="3" ry="8.5" width="6" height="17" fill="#9f1010">
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.5384615384615383s" begin="-1.1188811188811187s" repeatCount="indefinite"></animate>
            </rect>
            </g><g transform="rotate(98.18181818181819 50 50)">
            <rect x="47" y="18.5" rx="3" ry="8.5" width="6" height="17" fill="#9f1010">
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.5384615384615383s" begin="-0.979020979020979s" repeatCount="indefinite"></animate>
            </rect>
            </g><g transform="rotate(130.9090909090909 50 50)">
            <rect x="47" y="18.5" rx="3" ry="8.5" width="6" height="17" fill="#9f1010">
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.5384615384615383s" begin="-0.8391608391608392s" repeatCount="indefinite"></animate>
            </rect>
            </g><g transform="rotate(163.63636363636363 50 50)">
            <rect x="47" y="18.5" rx="3" ry="8.5" width="6" height="17" fill="#9f1010">
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.5384615384615383s" begin="-0.6993006993006993s" repeatCount="indefinite"></animate>
            </rect>
            </g><g transform="rotate(196.36363636363637 50 50)">
            <rect x="47" y="18.5" rx="3" ry="8.5" width="6" height="17" fill="#9f1010">
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.5384615384615383s" begin="-0.5594405594405594s" repeatCount="indefinite"></animate>
            </rect>
            </g><g transform="rotate(229.0909090909091 50 50)">
            <rect x="47" y="18.5" rx="3" ry="8.5" width="6" height="17" fill="#9f1010">
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.5384615384615383s" begin="-0.4195804195804196s" repeatCount="indefinite"></animate>
            </rect>
            </g><g transform="rotate(261.8181818181818 50 50)">
            <rect x="47" y="18.5" rx="3" ry="8.5" width="6" height="17" fill="#9f1010">
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.5384615384615383s" begin="-0.2797202797202797s" repeatCount="indefinite"></animate>
            </rect>
            </g><g transform="rotate(294.54545454545456 50 50)">
            <rect x="47" y="18.5" rx="3" ry="8.5" width="6" height="17" fill="#9f1010">
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.5384615384615383s" begin="-0.13986013986013984s" repeatCount="indefinite"></animate>
            </rect>
            </g><g transform="rotate(327.27272727272725 50 50)">
            <rect x="47" y="18.5" rx="3" ry="8.5" width="6" height="17" fill="#9f1010">
                <animate attributeName="opacity" values="1;0" keyTimes="0;1" dur="1.5384615384615383s" begin="0s" repeatCount="indefinite"></animate>
            </rect>
            </g>
        </svg>
        </>
    )
}
export default Spinner;