import pexpect
import re

from threading import Thread
from time import sleep

class QIV(object):

    _LAUNCH_CMD = '/usr/bin/omxplayer -o hdmi %s %s'
    _PAUSE_CMD = 'p'
    _QUIT_CMD = 'q'

    paused = False
    subtitles_visible = True

    def __init__(self, mediafile):
        #cmd="viewnior --fullscreen "+mediafile
        cmd="feh -F "+mediafile
        self._process = pexpect.spawn(cmd)
        
    def stop(self):
        self._process.send(self._QUIT_CMD)
        self._process.terminate(force=True)

    def seek(self, minutes):
        raise NotImplementedError
