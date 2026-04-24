

const ToolStack = () => {
    const skillSet = [
        "PHP", "Laravel", "Rust", "Zig", "Python", "React.js", "NestJS", "Next.js", "Java", "Tailwind CSS"
    ];
    return (
        <div className="flex flex-wrap justify-center gap-3">
            {skillSet.map((skill, idx) => (
                <span key={idx} className="px-4 py-2 items-center bg-ivory border border-border-cream rounded-xl text-charcoal-warm text-sm font-medium hover:bg-warm-sand hover:border-border-warm transition-all duration-200">
                    {skill}
                </span>
            ))}
        </div>
    )
}

export default ToolStack