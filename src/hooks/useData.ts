interface ReturnDate {
    time: string;
    date: string;
    wish: string;
}

export const useDate = (): ReturnDate => {
    const locale = 'en';
    const today = new Date();

    const day = today.toLocaleDateString(locale, { weekday: 'long' });
    const date = `${day}, ${today.getDate()} ${today.toLocaleDateString(locale, { month: 'long' })}\n\n`;

    const hour = today.getHours();
    const wish = `Good ${(hour < 12 && 'Morning') || (hour < 17 && 'Afternoon') || 'Evening'}, `;

    const time = today.toLocaleTimeString(locale, { hour: 'numeric', hour12: false, minute: 'numeric' });

    return {
        date,
        time,
        wish,
    };
};