// creates the sound function needed for playing audio
function sound(src)
{
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.play = function()
    {
        this.sound.play();
    }
}
// a play function to let the music be played
// Bit of a side thing, but this is actually some music I ended up getting made for a D&D character of mine.
function play()
{
    mySound = new sound("sometimes_ its the small things.mp3")
    mySound.play();
}
// Stops the music by reloading the page.
function stop()
{
    window.location.reload();
}
