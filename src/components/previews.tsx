/*
 * Small decorative previews for the "Things I've made" cards.
 * They are plain markup, hidden from assistive tech, and mimic each app's own look.
 */

export function ToolsPreview() {
  return (
    <div
      aria-hidden="true"
      className="w-full max-w-[300px] rounded-[10px] border border-[#2b363f] bg-[#12161b] px-4 py-3.5 font-mono text-[12.5px] leading-[1.7]"
    >
      <p className="text-[#94a1ae]">{'{"a":1,"b":[2]}'}</p>
      <p className="text-[#e6ebf0]">
        {"{ "}
        <span className="text-[#9cc4e4]">&quot;a&quot;</span>
        {": "}
        <span className="text-[#f2b33d]">1</span>
        {", "}
        <span className="text-[#9cc4e4]">&quot;b&quot;</span>
        {": [ "}
        <span className="text-[#f2b33d]">2</span>
        {" ] }"}
      </p>
      <p className="pt-1.5 text-[11px] text-[#94a1ae]">Runs in your browser. Nothing is uploaded.</p>
    </div>
  );
}

export function FogtrailPreview() {
  return (
    <div
      aria-hidden="true"
      className="flex h-[132px] w-full max-w-[320px] overflow-hidden rounded-[10px] border border-(--ft-border) bg-(--ft-main) font-mono text-[10.5px] text-(--ft-ink)"
    >
      <div className="flex w-28 flex-none flex-col gap-[3px] border-r border-(--ft-border) bg-(--ft-sidebar) px-1.5 py-2">
        <div className="flex items-center gap-[5px] px-1 pb-[5px] font-app text-[11px] font-semibold">
          <span className="size-1.5 rounded-full bg-(--ft-green)" />
          local
        </div>
        <div className="rounded-[5px] bg-(--ft-selected) px-1.5 py-[3px] text-(--ft-selected-ink)">
          session:9f2c
        </div>
        <div className="px-1.5 py-[3px] text-(--ft-muted)">user:42</div>
        <div className="px-1.5 py-[3px] text-(--ft-muted)">queue:jobs</div>
        <div className="px-1.5 py-[3px] text-(--ft-muted)">cache:home</div>
      </div>
      <div className="flex min-w-0 flex-1 flex-col gap-1 px-3 py-2.5 leading-[1.55]">
        <div className="font-app text-[11.5px] font-medium">session:9f2c</div>
        <div className="text-(--ft-muted)">hash · TTL 59m</div>
        <div>
          <span className="text-(--ft-key)">&quot;user&quot;</span>:{" "}
          <span className="text-(--ft-num)">42</span>
        </div>
        <div>
          <span className="text-(--ft-key)">&quot;role&quot;</span>:{" "}
          <span className="text-(--ft-green)">&quot;admin&quot;</span>
        </div>
      </div>
    </div>
  );
}
