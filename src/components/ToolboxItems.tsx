"use client";

import { twMerge } from "tailwind-merge";
import { TechIcon } from "./TechIcon";
import { motion } from "framer-motion";
import { Fragment } from "react";

export const ToolboxItems = ({
    items,
    className,
    itemsWrapperClassName,
}: {
    items: {
        title: string;
        iconType: React.ElementType;
    }[];
    className?: string;
    itemsWrapperClassName?: string;
}) => {
    
    // خدعة برمجية: نلتقط كلاس الإزاحة من Tailwind ونحوله إلى حركة لضمان العشوائية وعدم المحاذاة
    const isManualOffset = itemsWrapperClassName?.includes("-translate-x-1/2");
    
    // إزالة الكلاس لتجنب التعارض، حيث سيتكفل Framer Motion بالإزاحة الأصلية
    const wrapperClasses = twMerge(
        "flex flex-none py-0.5 gap-6 pr-6",
        isManualOffset ? itemsWrapperClassName?.replace("-translate-x-1/2", "") : itemsWrapperClassName
    );

    return (
        <div
            className={twMerge(
                "flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]",
                className
            )}
        >
            <motion.div
                // إذا كان الصف الثاني، نبدأ من نقطة مختلفة تماماً للحفاظ على شكل العشوائية
                animate={{ x: isManualOffset ? ["-25%", "-75%"] : ["0%", "-50%"] }}
                // إبطاء السرعة جداً (45 ثانية) لتناسب الطابع الفخم
                transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
                className={wrapperClasses}
            >
                {[...new Array(2)].fill(0).map((_, index) => (
                    <Fragment key={index}>
                        {items.map((item) => (
                            <div 
                                key={item.title} 
                                className='inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg transition-colors hover:bg-white/5'
                            >
                                <TechIcon component={item.iconType} />
                                <span className="font-semibold">{item.title}</span>
                            </div>
                        ))}
                    </Fragment>
                ))}
            </motion.div>
        </div>
    );
};