import {makeLinkActive} from './menu';

const sections = document.querySelectorAll("section, footer");
const sectionsPos = [];

export function initScroll() {
    sections.forEach(section => {
        sectionsPos.push(section.offsetTop);
    });
    document.body.onscroll = scrollListener;
}

function scrollListener() {
    const pos = document.documentElement.scrollTop;
    let activeSectionIndex = 0;
    sectionsPos.forEach((value, index) => {
        if (pos >= value) {
            activeSectionIndex = index;
        }
    });
    const activeSection = sections[activeSectionIndex];
    const activeSectionId = activeSection.id.replace("section-", "");
    makeLinkActive(activeSectionId);
}