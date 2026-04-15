import { useState, useEffect } from 'react';
import { Play, ExternalLink, X, Download, FileIcon } from 'lucide-react';

/* ─────────────────────────────────────────
   VideoCard — fetches oEmbed thumbnail
───────────────────────────────────────── */
export function VideoCard({ video, color, t }) {
  const [thumb,   setThumb]   = useState(null);
  const [ytTitle, setYtTitle] = useState(null);

  useEffect(() => {
    const url = `https://www.youtube.com/oembed?url=${encodeURIComponent(video.url)}&format=json`;
    fetch(url)
      .then(r => r.ok ? r.json() : null)
      .then(data => { if (data) { setThumb(data.thumbnail_url); setYtTitle(data.title); } })
      .catch(() => {});
  }, [video.url]);

  return (
    <a
      href={video.url}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        display: 'flex', flexDirection: 'column', textDecoration: 'none',
        borderRadius: 12, overflow: 'hidden',
        background: t.card, border: `1px solid ${t.brC}`,
        transition: 'border-color 0.15s ease, box-shadow 0.15s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = `${color}40`;
        e.currentTarget.style.boxShadow = `0 0 0 3px ${color}12`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = t.brC;
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Thumbnail */}
      <div style={{
        width: '100%', aspectRatio: '16/9', background: t.subtleBg,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        position: 'relative', overflow: 'hidden',
      }}>
        {thumb
          ? <img src={thumb} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          : <Play size={28} color={t.t18} />
        }
        <div
          style={{
            position: 'absolute', inset: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            background: 'rgba(0,0,0,0.22)', opacity: 0, transition: 'opacity 0.15s',
          }}
          onMouseEnter={e => { e.currentTarget.style.opacity = 1; }}
          onMouseLeave={e => { e.currentTarget.style.opacity = 0; }}
        >
          <div style={{
            width: 44, height: 44, borderRadius: '50%',
            background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <Play size={18} color="#fff" fill="#fff" />
          </div>
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: '14px 16px 16px', display: 'flex', flexDirection: 'column', gap: 6, flex: 1 }}>
        <p style={{
          fontSize: 13, fontWeight: 600, color: t.t1, lineHeight: 1.35,
          display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
        }}>
          {video.title}
        </p>
        {ytTitle && ytTitle !== video.title && (
          <p style={{
            fontSize: 11, color: t.t22, lineHeight: 1.35,
            display: '-webkit-box', WebkitLineClamp: 1, WebkitBoxOrient: 'vertical', overflow: 'hidden',
          }}>
            {ytTitle}
          </p>
        )}
        <p style={{
          fontSize: 12, color: t.t33, lineHeight: 1.6, marginTop: 2, flex: 1,
          display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden',
        }}>
          {video.desc}
        </p>
        <div style={{ marginTop: 10, display: 'flex', alignItems: 'center', gap: 5, fontSize: 11, fontWeight: 600, color }}>
          <ExternalLink size={11} />
          Open on YouTube
        </div>
      </div>
    </a>
  );
}

/* ─────────────────────────────────────────
   VideoModal — bottom sheet
───────────────────────────────────────── */
export function VideoModal({ subject, t, onClose }) {
  const videos = subject.links?.videos || [];

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  return (
    <div
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
      style={{
        position: 'fixed', inset: 0, zIndex: 200,
        background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(6px)',
        display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
      }}
    >
      <div className="animate-slide-up" style={{
        width: '100%', maxWidth: 860,
        background: t.surface, borderRadius: '18px 18px 0 0',
        border: `1px solid ${t.br}`, borderBottom: 'none',
        padding: '28px 32px 36px',
        maxHeight: '80vh', display: 'flex', flexDirection: 'column',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
          <div>
            <p style={{ fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.18em', color: subject.color, marginBottom: 4 }}>
              {subject.code} · Video Lectures
            </p>
            <h2 style={{ fontSize: 18, fontWeight: 700, color: t.t1, letterSpacing: '-0.02em' }}>
              {subject.name}
            </h2>
          </div>
          <button onClick={onClose} style={{
            width: 32, height: 32, borderRadius: 8, border: `1px solid ${t.brC}`,
            background: t.card, cursor: 'pointer', display: 'flex',
            alignItems: 'center', justifyContent: 'center', color: t.t33, flexShrink: 0,
          }}>
            <X size={15} />
          </button>
        </div>
        <div style={{
          overflowY: 'auto', flex: 1,
          display: 'grid',
          gridTemplateColumns: videos.length === 1 ? '1fr' : 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: 14, paddingRight: 4,
        }}>
          {videos.map((v, i) => <VideoCard key={i} video={v} color={subject.color} t={t} />)}
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────
   PdfViewerModal — full-screen with sidebar
   files: [{ name, fileId }]
   folderUrl: fallback Drive folder link
   label: header label string (e.g. 'Notes')
───────────────────────────────────────── */
export function PdfViewerModal({ subject, files, folderUrl, label, t, onClose }) {
  const [selected, setSelected] = useState(files[0] || null);
  const [loading,  setLoading]  = useState(true);

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [onClose]);

  useEffect(() => { setLoading(true); }, [selected]);

  const previewUrl  = selected ? `https://drive.google.com/file/d/${selected.fileId}/preview` : null;
  const downloadUrl = selected ? `https://drive.google.com/uc?export=download&id=${selected.fileId}` : null;

  return (
    <div
      onClick={e => { if (e.target === e.currentTarget) onClose(); }}
      style={{
        position: 'fixed', inset: 0, zIndex: 200,
        background: 'rgba(0,0,0,0.65)', backdropFilter: 'blur(8px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 20,
      }}
    >
      <div className="animate-slide-up" style={{
        width: '95vw', height: '92vh',
        background: t.surface, borderRadius: 16,
        border: `1px solid ${t.br}`,
        display: 'flex', flexDirection: 'column',
        overflow: 'hidden',
      }}>
        {/* Top bar */}
        <div style={{
          display: 'flex', alignItems: 'center', gap: 16,
          padding: '14px 20px', borderBottom: `1px solid ${t.brS}`, flexShrink: 0,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flex: 1, minWidth: 0 }}>
            <span style={{
              padding: '3px 9px', borderRadius: 5, flexShrink: 0,
              fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em',
              color: subject.color, background: `${subject.color}18`, border: `1px solid ${subject.color}28`,
            }}>
              {subject.code} · {label}
            </span>
            {selected && (
              <span style={{
                fontSize: 14, fontWeight: 600, color: t.t1,
                overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
              }}>
                {selected.name}
              </span>
            )}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
            {downloadUrl && (
              <a
                href={downloadUrl}
                download
                style={{
                  display: 'flex', alignItems: 'center', gap: 6,
                  padding: '7px 13px', borderRadius: 8, textDecoration: 'none',
                  fontSize: 12, fontWeight: 600, color: subject.color,
                  background: `${subject.color}12`, border: `1px solid ${subject.color}28`,
                  transition: 'background 0.15s',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = `${subject.color}22`; }}
                onMouseLeave={e => { e.currentTarget.style.background = `${subject.color}12`; }}
              >
                <Download size={13} />
                Download
              </a>
            )}
            <button onClick={onClose} style={{
              width: 32, height: 32, borderRadius: 8, border: `1px solid ${t.brC}`,
              background: t.card, cursor: 'pointer', display: 'flex',
              alignItems: 'center', justifyContent: 'center', color: t.t33,
            }}>
              <X size={15} />
            </button>
          </div>
        </div>

        {/* Body */}
        <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
          {/* Sidebar */}
          <div style={{
            width: 220, flexShrink: 0,
            borderRight: `1px solid ${t.brS}`,
            overflowY: 'auto', padding: '12px 10px',
            display: 'flex', flexDirection: 'column', gap: 4,
          }}>
            <p style={{
              fontSize: 9, fontWeight: 700, textTransform: 'uppercase',
              letterSpacing: '0.18em', color: t.t18, padding: '4px 8px', marginBottom: 4,
            }}>
              Files
            </p>
            {files.length === 0 && (
              <div style={{ padding: '8px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                <p style={{ fontSize: 12, color: t.t22, lineHeight: 1.55 }}>No files added yet.</p>
                {folderUrl && (
                  <a href={folderUrl} target="_blank" rel="noopener noreferrer"
                    style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 11, fontWeight: 600, color: subject.color, textDecoration: 'none' }}
                  >
                    <ExternalLink size={11} />
                    Open Drive folder
                  </a>
                )}
              </div>
            )}
            {files.map((f, i) => {
              const isActive = selected?.fileId === f.fileId;
              return (
                <button
                  key={i}
                  onClick={() => setSelected(f)}
                  style={{
                    display: 'flex', alignItems: 'flex-start', gap: 9,
                    padding: '9px 10px', borderRadius: 8, textAlign: 'left',
                    cursor: 'pointer', width: '100%',
                    background: isActive ? `${subject.color}14` : 'transparent',
                    border: `1px solid ${isActive ? `${subject.color}30` : 'transparent'}`,
                    transition: 'background 0.12s, border-color 0.12s',
                  }}
                  onMouseEnter={e => { if (!isActive) e.currentTarget.style.background = t.hoverBg; }}
                  onMouseLeave={e => { if (!isActive) e.currentTarget.style.background = 'transparent'; }}
                >
                  <FileIcon size={14} color={isActive ? subject.color : t.t22} style={{ marginTop: 1, flexShrink: 0 }} />
                  <span style={{
                    fontSize: 12, fontWeight: isActive ? 600 : 400,
                    color: isActive ? t.t1 : t.t40, lineHeight: 1.4, wordBreak: 'break-word',
                  }}>
                    {f.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* PDF iframe */}
          <div style={{ flex: 1, position: 'relative', background: t.bg }}>
            {previewUrl ? (
              <>
                {loading && (
                  <div style={{
                    position: 'absolute', inset: 0, display: 'flex',
                    alignItems: 'center', justifyContent: 'center',
                    flexDirection: 'column', gap: 12,
                  }}>
                    <svg className="animate-spin-smooth" width="20" height="20"
                      viewBox="0 0 24 24" fill="none" stroke={subject.color} strokeWidth="2.5">
                      <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                    </svg>
                    <span style={{ fontSize: 12, color: t.t22 }}>Loading PDF…</span>
                  </div>
                )}
                <iframe
                  key={selected.fileId}
                  src={previewUrl}
                  title={selected.name}
                  onLoad={() => setLoading(false)}
                  style={{
                    width: '100%', height: '100%', border: 'none',
                    opacity: loading ? 0 : 1, transition: 'opacity 0.2s',
                  }}
                  allow="autoplay"
                />
              </>
            ) : (
              <div style={{
                height: '100%', display: 'flex', alignItems: 'center',
                justifyContent: 'center', flexDirection: 'column', gap: 10,
              }}>
                <FileIcon size={32} color={t.t18} />
                <p style={{ fontSize: 13, color: t.t22 }}>Select a file to preview</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
