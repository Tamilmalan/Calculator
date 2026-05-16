function openConversionPage(type) {
    switch (type) {
        case 'length':
            window.location.href = 'lc.html'; // Replace with actual page URL
            break;
        case 'area':
            window.location.href = 'ac.html'; // Replace with actual page URL
            break;
        case 'volume':
            window.location.href = 'vc.html'; // Replace with actual page URL
            break;
        case 'speed':
            window.location.href = 'sc.html'; // Replace with actual page URL
            break;
        case 'weight':
            window.location.href = 'wc.html'; // Replace with actual page URL
            break;
        case 'temperature':
            window.location.href = 'tc.html'; // Replace with actual page URL
            break;
        case 'power':
            window.location.href = 'pr.html'; // Replace with actual page URL
            break;
        case 'pressure':
            window.location.href = 'pc.html'; // Replace with actual page URL
            break;
        default:
            console.log('Unknown conversion type');
            break;
    }
}
