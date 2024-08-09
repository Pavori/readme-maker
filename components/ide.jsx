import React, { useState, useRef } from 'react';
import { IoIosCloseCircleOutline } from "react-icons/io";

function Ide() {
    const [code, setCode] = useState("");
    const editorRef = useRef(null);

    const handleInput = () => {
        const text = editorRef.current.innerText; // innerText ile metni alıyoruz
        setCode(text);

        // Başlıkları (#) renklendirme
        const headerRegex = /^(#{1,6})\s(.+)$/gm;
        let coloredText = text.replace(headerRegex, '<span style="color: #f87171;">$1 $2</span>');

        // Yapılandırılmış listeyi (-, *, +) renklendirme
        const listRegex = /^(\*|-|\+)\s(.+)$/gm;
        coloredText = coloredText.replace(listRegex, '<span style="color: #4ade80;">$1 $2</span>');

        // Numaralı listeyi (1., 2.) renklendirme
        const orderedListRegex = /^(\d+)\.\s(.+)$/gm;
        coloredText = coloredText.replace(orderedListRegex, '<span style="color: #fdba74;">$1. $2</span>');

        // İtalik metni renklendirme (tek * veya _ ile)
        const italicRegex = /(\*[^*]+\*|_[^_]+_)/g;
        coloredText = coloredText.replace(italicRegex, (match) => {
            return `<span style="color: #7c3aed;">${match}</span>`;
        });

        // İçeriği güncelleme
        editorRef.current.innerHTML = coloredText;

        // Caret pozisyonunu sonuna taşı
        const range = document.createRange();
        range.selectNodeContents(editorRef.current);
        range.collapse(false);
        const sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
    };

    return (
        <div className='relative h-full w-full z-20 bg-fourth'>
            <div className='p-6'>
                <div className='w-full flex items-center justify-between'>
                    <h2 className='uppercase font-semibold tracking-widest text-primary'>Try it here</h2>
                    <IoIosCloseCircleOutline className='text-2xl text-red-400 transition-all hover:text-red-600' />
                </div>
                <div className='w-full h-[1px] bg-tert my-4'></div>
                <div>
                    <div
                        ref={editorRef}
                        contentEditable
                        onInput={handleInput}
                        className='w-full bg-fourth text-sm text-primary tracking-wider focus:outline-none'
                        style={{ whiteSpace: 'pre-wrap', minHeight: '200px' }}
                    />
                </div>
            </div>
        </div>
    )
}

export default Ide;
