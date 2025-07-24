
local plrs = game:GetService("Players")
local plr = plrs.LocalPlayer
local mouse = plr:GetMouse()
local RunService = game:GetService("RunService")
local propy = PhysicalProperties.new(1000, 1000, 0, 1000, 0)

local function findplr(text)
    text = text:lower()
    for _, v in pairs(plrs:GetPlayers()) do
        if v ~= plr and (v.Name:lower():find(text) or v.DisplayName:lower():find(text)) then
            return v
        end
    end
end





local GUI = Instance.new("ScreenGui")
local Container = Instance.new("Frame")
local Line = Instance.new("Frame")
local label = Instance.new("TextLabel")
local Tabs = Instance.new("Frame")
local Main = Instance.new("Frame")
local Antifling = Instance.new("TextButton")
local fccolor = Instance.new("Frame")
local AntiAnvil = Instance.new("TextButton")
local fccolor2 = Instance.new("Frame")
local FakeAccs = Instance.new("TextButton")
local fccolor3 = Instance.new("Frame")
local AntiSpinner = Instance.new("TextButton")
local fccolor4 = Instance.new("Frame")
local fling = Instance.new("TextBox")
local AntiRagdoll = Instance.new("TextButton")
local fccolor5 = Instance.new("Frame")
local HackMovement = Instance.new("TextButton")
local fccolor6 = Instance.new("Frame")
local loopfling = Instance.new("TextBox")
local flingv2 = Instance.new("TextBox")
local loopflingv2 = Instance.new("TextBox")
local ClearLoop = Instance.new("TextButton")
local AntiVoid = Instance.new("TextButton")
local fccolor7 = Instance.new("Frame")
local FlingAura = Instance.new("TextButton")
local fccolor8 = Instance.new("Frame")
local AutoRespawn = Instance.new("TextButton")
local fccolor9 = Instance.new("Frame")
local Hiddenv2 = Instance.new("TextButton")
local fccolor10 = Instance.new("Frame")
local AntiVelocity = Instance.new("TextButton")
local fccolor1 = Instance.new("Frame")
local Tools = Instance.new("Frame")
local AnvilOrbit = Instance.new("TextButton")
local fccolor11 = Instance.new("Frame")
local anvilkill = Instance.new("TextBox")
local AntiAnvilBreak = Instance.new("TextButton")
local fccolor12 = Instance.new("Frame")
local AutoThrow = Instance.new("TextButton")
local fccolor14 = Instance.new("Frame")
local orbitheight = Instance.new("TextBox")
local orbitradius = Instance.new("TextBox")
local orbitspeed = Instance.new("TextBox")
local LowPP = Instance.new("TextButton")
local fccolor15 = Instance.new("Frame")
local AnvilDrone = Instance.new("TextButton")
local fccolor13 = Instance.new("Frame")
local Global = Instance.new("Frame")
local LagServer = Instance.new("TextButton")
local fccolor16 = Instance.new("Frame")
local Misc = Instance.new("Frame")
local Keybinds = Instance.new("Frame")
local GlobalB = Instance.new("TextButton")
local KeybindsB = Instance.new("TextButton")
local MainB = Instance.new("TextButton")
local MiscB = Instance.new("TextButton")
local ToolsB = Instance.new("TextButton")

--Properties:

GUI.Name = "GUI"
GUI.Parent = game.Players.LocalPlayer:WaitForChild("PlayerGui")
GUI.ZIndexBehavior = Enum.ZIndexBehavior.Sibling
GUI.ResetOnSpawn = false

Container.Name = "Container"
Container.Parent = GUI
Container.Active = true
Container.Draggable = true
Container.BackgroundColor3 = Color3.fromRGB(17, 17, 17)
Container.BackgroundTransparency = 0.200
Container.BorderColor3 = Color3.fromRGB(0, 0, 0)
Container.BorderSizePixel = 0
Container.Position = UDim2.new(0.112696439, 0, 0.412030578, 0)
Container.Size = UDim2.new(0, 380, 0, 27)

Line.Name = "Line"
Line.Parent = Container
Line.BackgroundColor3 = Color3.fromRGB(255, 0, 0)
Line.BorderColor3 = Color3.fromRGB(0, 0, 0)
Line.BorderSizePixel = 0
Line.Position = UDim2.new(0, 0, 1, 0)
Line.Size = UDim2.new(0, 380, 0, 2)

label.Name = "label"
label.Parent = Container
label.BackgroundColor3 = Color3.fromRGB(255, 255, 255)
label.BackgroundTransparency = 1.000
label.BorderColor3 = Color3.fromRGB(0, 0, 0)
label.BorderSizePixel = 0
label.Size = UDim2.new(0, 340, 0, 27)
label.Font = Enum.Font.SourceSans
label.Text = "Made by Kai (Nezuurr) | Version. 1"
label.TextColor3 = Color3.fromRGB(208, 208, 208)
label.TextScaled = true
label.TextSize = 25.000
label.TextWrapped = true
label.TextXAlignment = Enum.TextXAlignment.Left

Tabs.Name = "Tabs"
Tabs.Parent = Container
Tabs.BackgroundColor3 = Color3.fromRGB(17, 17, 17)
Tabs.BackgroundTransparency = 1.000
Tabs.BorderColor3 = Color3.fromRGB(0, 0, 0)
Tabs.BorderSizePixel = 0
Tabs.Position = UDim2.new(0, 0, 1.07407403, 0)
Tabs.Size = UDim2.new(0, 380, 0, 240)

Main.Name = "Main"
Main.Parent = Tabs
Main.BackgroundColor3 = Color3.fromRGB(16, 16, 16)
Main.BackgroundTransparency = 0.200
Main.BorderColor3 = Color3.fromRGB(0, 0, 0)
Main.BorderSizePixel = 0
Main.Size = UDim2.new(0, 380, 0, 240)
Main.Visible = false

Antifling.Name = "Antifling"
Antifling.Parent = Main
Antifling.BackgroundColor3 = Color3.fromRGB(0, 0, 0)
Antifling.BorderColor3 = Color3.fromRGB(0, 0, 0)
Antifling.BorderSizePixel = 0
Antifling.Position = UDim2.new(0.0210526325, 0, 0.0458333343, 0)
Antifling.Size = UDim2.new(0, 84, 0, 25)
Antifling.Font = Enum.Font.SourceSans
Antifling.Text = "AntiFIing"
Antifling.TextColor3 = Color3.fromRGB(255, 255, 255)
Antifling.TextScaled = true
Antifling.TextSize = 14.000
Antifling.TextWrapped = true

fccolor.Name = "fccolor"
fccolor.Parent = Antifling
fccolor.BackgroundColor3 = Color3.fromRGB(153, 0, 0)
fccolor.BorderColor3 = Color3.fromRGB(0, 0, 0)
fccolor.BorderSizePixel = 0
fccolor.Position = UDim2.new(0, 0, 1, 0)
fccolor.Size = UDim2.new(0, 84, 0, 2)

AntiAnvil.Name = "AntiAnvil"
AntiAnvil.Parent = Main
AntiAnvil.BackgroundColor3 = Color3.fromRGB(0, 0, 0)
AntiAnvil.BorderColor3 = Color3.fromRGB(0, 0, 0)
AntiAnvil.BorderSizePixel = 0
AntiAnvil.Position = UDim2.new(0.513000011, 0, 0.0460000001, 0)
AntiAnvil.Size = UDim2.new(0, 84, 0, 25)
AntiAnvil.Font = Enum.Font.SourceSans
AntiAnvil.Text = "AntiAnvil"
AntiAnvil.TextColor3 = Color3.fromRGB(255, 255, 255)
AntiAnvil.TextScaled = true
AntiAnvil.TextSize = 14.000
AntiAnvil.TextWrapped = true

fccolor2.Name = "fccolor2"
fccolor2.Parent = AntiAnvil
fccolor2.BackgroundColor3 = Color3.fromRGB(153, 0, 0)
fccolor2.BorderColor3 = Color3.fromRGB(0, 0, 0)
fccolor2.BorderSizePixel = 0
fccolor2.Position = UDim2.new(0, 0, 1, 0)
fccolor2.Size = UDim2.new(0, 84, 0, 2)

FakeAccs.Name = "FakeAccs"
FakeAccs.Parent = Main
FakeAccs.BackgroundColor3 = Color3.fromRGB(0, 0, 0)
FakeAccs.BorderColor3 = Color3.fromRGB(0, 0, 0)
FakeAccs.BorderSizePixel = 0
FakeAccs.Position = UDim2.new(0.760999978, 0, 0.0460000001, 0)
FakeAccs.Size = UDim2.new(0, 84, 0, 25)
FakeAccs.Font = Enum.Font.SourceSans
FakeAccs.Text = "FakeAccs"
FakeAccs.TextColor3 = Color3.fromRGB(255, 255, 255)
FakeAccs.TextScaled = true
FakeAccs.TextSize = 14.000
FakeAccs.TextWrapped = true

fccolor3.Name = "fccolor3"
fccolor3.Parent = FakeAccs
fccolor3.BackgroundColor3 = Color3.fromRGB(153, 0, 0)
fccolor3.BorderColor3 = Color3.fromRGB(0, 0, 0)
fccolor3.BorderSizePixel = 0
fccolor3.Position = UDim2.new(0, 0, 1, 0)
fccolor3.Size = UDim2.new(0, 84, 0, 2)

AntiSpinner.Name = "AntiSpinner"
AntiSpinner.Parent = Main
AntiSpinner.BackgroundColor3 = Color3.fromRGB(0, 0, 0)
AntiSpinner.BorderColor3 = Color3.fromRGB(0, 0, 0)
AntiSpinner.BorderSizePixel = 0
AntiSpinner.Position = UDim2.new(0.018421052, 0, 0.200000003, 0)
AntiSpinner.Size = UDim2.new(0, 84, 0, 25)
AntiSpinner.Font = Enum.Font.SourceSans
AntiSpinner.Text = "AntiSpinner"
AntiSpinner.TextColor3 = Color3.fromRGB(255, 255, 255)
AntiSpinner.TextScaled = true
AntiSpinner.TextSize = 14.000
AntiSpinner.TextWrapped = true

fccolor4.Name = "fccolor4"
fccolor4.Parent = AntiSpinner
fccolor4.BackgroundColor3 = Color3.fromRGB(153, 0, 0)
fccolor4.BorderColor3 = Color3.fromRGB(0, 0, 0)
fccolor4.BorderSizePixel = 0
fccolor4.Position = UDim2.new(0, 0, 1, 0)
fccolor4.Size = UDim2.new(0, 84, 0, 2)

fling.Name = "fling"
fling.Parent = Main
fling.BackgroundColor3 = Color3.fromRGB(56, 56, 56)
fling.BackgroundTransparency = 0.600
fling.BorderColor3 = Color3.fromRGB(0, 0, 0)
fling.BorderSizePixel = 0
fling.Position = UDim2.new(0.263157904, 0, 0.200000003, 0)
fling.Size = UDim2.new(0, 84, 0, 25)
fling.Font = Enum.Font.SourceSans
fling.PlaceholderColor3 = Color3.fromRGB(79, 79, 79)
fling.PlaceholderText = "FIing"
fling.Text = ""
fling.TextColor3 = Color3.fromRGB(131, 131, 131)
fling.TextScaled = true
fling.TextSize = 14.000
fling.TextWrapped = true

AntiRagdoll.Name = "AntiRagdoll"
AntiRagdoll.Parent = Main
AntiRagdoll.BackgroundColor3 = Color3.fromRGB(0, 0, 0)
AntiRagdoll.BorderColor3 = Color3.fromRGB(0, 0, 0)
AntiRagdoll.BorderSizePixel = 0
AntiRagdoll.Position = UDim2.new(0.513157904, 0, 0.200000003, 0)
AntiRagdoll.Size = UDim2.new(0, 84, 0, 25)
AntiRagdoll.Font = Enum.Font.SourceSans
AntiRagdoll.Text = "AntiRagdoll"
AntiRagdoll.TextColor3 = Color3.fromRGB(255, 255, 255)
AntiRagdoll.TextScaled = true
AntiRagdoll.TextSize = 14.000
AntiRagdoll.TextWrapped = true

fccolor5.Name = "fccolor5"
fccolor5.Parent = AntiRagdoll
fccolor5.BackgroundColor3 = Color3.fromRGB(153, 0, 0)
fccolor5.BorderColor3 = Color3.fromRGB(0, 0, 0)
fccolor5.BorderSizePixel = 0
fccolor5.Position = UDim2.new(0, 0, 1, 0)
fccolor5.Size = UDim2.new(0, 84, 0, 2)

HackMovement.Name = "HackMovement"
HackMovement.Parent = Main
HackMovement.BackgroundColor3 = Color3.fromRGB(0, 0, 0)
HackMovement.BorderColor3 = Color3.fromRGB(0, 0, 0)
HackMovement.BorderSizePixel = 0
HackMovement.Position = UDim2.new(0.760526299, 0, 0.200000003, 0)
HackMovement.Size = UDim2.new(0, 84, 0, 25)
HackMovement.Font = Enum.Font.SourceSans
HackMovement.Text = "HackMovement"
HackMovement.TextColor3 = Color3.fromRGB(255, 255, 255)
HackMovement.TextScaled = true
HackMovement.TextSize = 14.000
HackMovement.TextWrapped = true

fccolor6.Name = "fccolor6"
fccolor6.Parent = HackMovement
fccolor6.BackgroundColor3 = Color3.fromRGB(153, 0, 0)
fccolor6.BorderColor3 = Color3.fromRGB(0, 0, 0)
fccolor6.BorderSizePixel = 0
fccolor6.Position = UDim2.new(0, 0, 1, 0)
fccolor6.Size = UDim2.new(0, 84, 0, 2)

loopfling.Name = "loopfling"
loopfling.Parent = Main
loopfling.BackgroundColor3 = Color3.fromRGB(56, 56, 56)
loopfling.BackgroundTransparency = 0.600
loopfling.BorderColor3 = Color3.fromRGB(0, 0, 0)
loopfling.BorderSizePixel = 0
loopfling.Position = UDim2.new(0.0210526325, 0, 0.366666675, 0)
loopfling.Size = UDim2.new(0, 84, 0, 25)
loopfling.Font = Enum.Font.SourceSans
loopfling.PlaceholderColor3 = Color3.fromRGB(79, 79, 79)
loopfling.PlaceholderText = "LoopFIing"
loopfling.Text = ""
loopfling.TextColor3 = Color3.fromRGB(131, 131, 131)
loopfling.TextScaled = true
loopfling.TextSize = 14.000
loopfling.TextWrapped = true

flingv2.Name = "flingv2"
flingv2.Parent = Main
flingv2.BackgroundColor3 = Color3.fromRGB(56, 56, 56)
flingv2.BackgroundTransparency = 0.600
flingv2.BorderColor3 = Color3.fromRGB(0, 0, 0)
flingv2.BorderSizePixel = 0
flingv2.Position = UDim2.new(0.265789479, 0, 0.366666675, 0)
flingv2.Size = UDim2.new(0, 84, 0, 25)
flingv2.Font = Enum.Font.SourceSans
flingv2.PlaceholderColor3 = Color3.fromRGB(79, 79, 79)
flingv2.PlaceholderText = "FIing v2"
flingv2.Text = ""
flingv2.TextColor3 = Color3.fromRGB(131, 131, 131)
flingv2.TextScaled = true
flingv2.TextSize = 14.000
flingv2.TextWrapped = true

loopflingv2.Name = "loopflingv2"
loopflingv2.Parent = Main
loopflingv2.BackgroundColor3 = Color3.fromRGB(56, 56, 56)
loopflingv2.BackgroundTransparency = 0.600
loopflingv2.BorderColor3 = Color3.fromRGB(0, 0, 0)
loopflingv2.BorderSizePixel = 0
loopflingv2.Position = UDim2.new(0.513157904, 0, 0.366666675, 0)
loopflingv2.Size = UDim2.new(0, 84, 0, 25)
loopflingv2.Font = Enum.Font.SourceSans
loopflingv2.PlaceholderColor3 = Color3.fromRGB(79, 79, 79)
loopflingv2.PlaceholderText = "LoopFIing v2"
loopflingv2.Text = ""
loopflingv2.TextColor3 = Color3.fromRGB(131, 131, 131)
loopflingv2.TextScaled = true
loopflingv2.TextSize = 14.000
loopflingv2.TextWrapped = true

ClearLoop.Name = "ClearLoop"
ClearLoop.Parent = Main
ClearLoop.BackgroundColor3 = Color3.fromRGB(0, 0, 0)
ClearLoop.BorderColor3 = Color3.fromRGB(0, 0, 0)
ClearLoop.BorderSizePixel = 0
ClearLoop.Position = UDim2.new(0.763157904, 0, 0.366666675, 0)
ClearLoop.Size = UDim2.new(0, 84, 0, 25)
ClearLoop.Font = Enum.Font.SourceSans
ClearLoop.Text = "Clear Loop"
ClearLoop.TextColor3 = Color3.fromRGB(255, 255, 255)
ClearLoop.TextScaled = true
ClearLoop.TextSize = 14.000
ClearLoop.TextWrapped = true

AntiVoid.Name = "AntiVoid"
AntiVoid.Parent = Main
AntiVoid.BackgroundColor3 = Color3.fromRGB(0, 0, 0)
AntiVoid.BorderColor3 = Color3.fromRGB(0, 0, 0)
AntiVoid.BorderSizePixel = 0
AntiVoid.Position = UDim2.new(0.0210526325, 0, 0.529166639, 0)
AntiVoid.Size = UDim2.new(0, 84, 0, 25)
AntiVoid.Font = Enum.Font.SourceSans
AntiVoid.Text = "AntiVoid"
AntiVoid.TextColor3 = Color3.fromRGB(255, 255, 255)
AntiVoid.TextScaled = true
AntiVoid.TextSize = 14.000
AntiVoid.TextWrapped = true

fccolor7.Name = "fccolor7"
fccolor7.Parent = AntiVoid
fccolor7.BackgroundColor3 = Color3.fromRGB(153, 0, 0)
fccolor7.BorderColor3 = Color3.fromRGB(0, 0, 0)
fccolor7.BorderSizePixel = 0
fccolor7.Position = UDim2.new(0, 0, 1, 0)
fccolor7.Size = UDim2.new(0, 84, 0, 2)

FlingAura.Name = "FlingAura"
FlingAura.Parent = Main
FlingAura.BackgroundColor3 = Color3.fromRGB(0, 0, 0)
FlingAura.BorderColor3 = Color3.fromRGB(0, 0, 0)
FlingAura.BorderSizePixel = 0
FlingAura.Position = UDim2.new(0.265789479, 0, 0.529166639, 0)
FlingAura.Size = UDim2.new(0, 84, 0, 25)
FlingAura.Font = Enum.Font.SourceSans
FlingAura.Text = "FlingAura"
FlingAura.TextColor3 = Color3.fromRGB(255, 255, 255)
FlingAura.TextScaled = true
FlingAura.TextSize = 14.000
FlingAura.TextWrapped = true

fccolor8.Name = "fccolor8"
fccolor8.Parent = FlingAura
fccolor8.BackgroundColor3 = Color3.fromRGB(153, 0, 0)
fccolor8.BorderColor3 = Color3.fromRGB(0, 0, 0)
fccolor8.BorderSizePixel = 0
fccolor8.Position = UDim2.new(0, 0, 1, 0)
fccolor8.Size = UDim2.new(0, 84, 0, 2)

AutoRespawn.Name = "AutoRespawn"
AutoRespawn.Parent = Main
AutoRespawn.BackgroundColor3 = Color3.fromRGB(0, 0, 0)
AutoRespawn.BorderColor3 = Color3.fromRGB(0, 0, 0)
AutoRespawn.BorderSizePixel = 0
AutoRespawn.Position = UDim2.new(0.513157904, 0, 0.529166639, 0)
AutoRespawn.Size = UDim2.new(0, 84, 0, 25)
AutoRespawn.Font = Enum.Font.SourceSans
AutoRespawn.Text = "AutoRespawn"
AutoRespawn.TextColor3 = Color3.fromRGB(255, 255, 255)
AutoRespawn.TextScaled = true
AutoRespawn.TextSize = 14.000
AutoRespawn.TextWrapped = true

fccolor9.Name = "fccolor9"
fccolor9.Parent = AutoRespawn
fccolor9.BackgroundColor3 = Color3.fromRGB(153, 0, 0)
fccolor9.BorderColor3 = Color3.fromRGB(0, 0, 0)
fccolor9.BorderSizePixel = 0
fccolor9.Position = UDim2.new(0, 0, 1, 0)
fccolor9.Size = UDim2.new(0, 84, 0, 2)

Hiddenv2.Name = "Hiddenv2"
Hiddenv2.Parent = Main
Hiddenv2.BackgroundColor3 = Color3.fromRGB(0, 0, 0)
Hiddenv2.BorderColor3 = Color3.fromRGB(0, 0, 0)
Hiddenv2.BorderSizePixel = 0
Hiddenv2.Position = UDim2.new(0.763157904, 0, 0.529166639, 0)
Hiddenv2.Size = UDim2.new(0, 84, 0, 25)
Hiddenv2.Font = Enum.Font.SourceSans
Hiddenv2.Text = "Hiddenv2"
Hiddenv2.TextColor3 = Color3.fromRGB(255, 255, 255)
Hiddenv2.TextScaled = true
Hiddenv2.TextSize = 14.000
Hiddenv2.TextWrapped = true

fccolor10.Name = "fccolor10"
fccolor10.Parent = Hiddenv2
fccolor10.BackgroundColor3 = Color3.fromRGB(153, 0, 0)
fccolor10.BorderColor3 = Color3.fromRGB(0, 0, 0)
fccolor10.BorderSizePixel = 0
fccolor10.Position = UDim2.new(0, 0, 1, 0)
fccolor10.Size = UDim2.new(0, 84, 0, 2)

AntiVelocity.Name = "AntiVelocity"
AntiVelocity.Parent = Main
AntiVelocity.BackgroundColor3 = Color3.fromRGB(0, 0, 0)
AntiVelocity.BorderColor3 = Color3.fromRGB(0, 0, 0)
AntiVelocity.BorderSizePixel = 0
AntiVelocity.Position = UDim2.new(0.263000011, 0, 0.0460000001, 0)
AntiVelocity.Size = UDim2.new(0, 84, 0, 25)
AntiVelocity.Font = Enum.Font.SourceSans
AntiVelocity.Text = "AntiVelocity"
AntiVelocity.TextColor3 = Color3.fromRGB(255, 255, 255)
AntiVelocity.TextScaled = true
AntiVelocity.TextSize = 14.000
AntiVelocity.TextWrapped = true

fccolor1.Name = "fccolor1"
fccolor1.Parent = AntiVelocity
fccolor1.BackgroundColor3 = Color3.fromRGB(153, 0, 0)
fccolor1.BorderColor3 = Color3.fromRGB(0, 0, 0)
fccolor1.BorderSizePixel = 0
fccolor1.Position = UDim2.new(0, 0, 1, 0)
fccolor1.Size = UDim2.new(0, 84, 0, 2)

Tools.Name = "Tools"
Tools.Parent = Tabs
Tools.BackgroundColor3 = Color3.fromRGB(16, 16, 16)
Tools.BackgroundTransparency = 0.200
Tools.BorderColor3 = Color3.fromRGB(0, 0, 0)
Tools.BorderSizePixel = 0
Tools.Size = UDim2.new(0, 380, 0, 240)
Tools.Visible = false

AnvilOrbit.Name = "AnvilOrbit"
AnvilOrbit.Parent = Tools
AnvilOrbit.BackgroundColor3 = Color3.fromRGB(0, 0, 0)
AnvilOrbit.BorderColor3 = Color3.fromRGB(0, 0, 0)
AnvilOrbit.BorderSizePixel = 0
AnvilOrbit.Position = UDim2.new(0.263000011, 0, 0.0460000001, 0)
AnvilOrbit.Size = UDim2.new(0, 84, 0, 25)
AnvilOrbit.Font = Enum.Font.SourceSans
AnvilOrbit.Text = "AnvilOrbit"
AnvilOrbit.TextColor3 = Color3.fromRGB(255, 255, 255)
AnvilOrbit.TextScaled = true
AnvilOrbit.TextSize = 14.000
AnvilOrbit.TextWrapped = true

fccolor11.Name = "fccolor11"
fccolor11.Parent = AnvilOrbit
fccolor11.BackgroundColor3 = Color3.fromRGB(153, 0, 0)
fccolor11.BorderColor3 = Color3.fromRGB(0, 0, 0)
fccolor11.BorderSizePixel = 0
fccolor11.Position = UDim2.new(0, 0, 1, 0)
fccolor11.Size = UDim2.new(0, 84, 0, 2)

anvilkill.Name = "anvilkill"
anvilkill.Parent = Tools
anvilkill.BackgroundColor3 = Color3.fromRGB(56, 56, 56)
anvilkill.BackgroundTransparency = 0.600
anvilkill.BorderColor3 = Color3.fromRGB(0, 0, 0)
anvilkill.BorderSizePixel = 0
anvilkill.Position = UDim2.new(0.0209999997, 0, 0.0460000001, 0)
anvilkill.Size = UDim2.new(0, 84, 0, 25)
anvilkill.Font = Enum.Font.SourceSans
anvilkill.PlaceholderColor3 = Color3.fromRGB(79, 79, 79)
anvilkill.PlaceholderText = "anvilkill"
anvilkill.Text = ""
anvilkill.TextColor3 = Color3.fromRGB(131, 131, 131)
anvilkill.TextScaled = true
anvilkill.TextSize = 14.000
anvilkill.TextWrapped = true

AntiAnvilBreak.Name = "AntiAnvilBreak"
AntiAnvilBreak.Parent = Tools
AntiAnvilBreak.BackgroundColor3 = Color3.fromRGB(0, 0, 0)
AntiAnvilBreak.BorderColor3 = Color3.fromRGB(0, 0, 0)
AntiAnvilBreak.BorderSizePixel = 0
AntiAnvilBreak.Position = UDim2.new(0.760999978, 0, 0.0460000001, 0)
AntiAnvilBreak.Size = UDim2.new(0, 84, 0, 25)
AntiAnvilBreak.Font = Enum.Font.SourceSans
AntiAnvilBreak.Text = "AntiAnvilBreak"
AntiAnvilBreak.TextColor3 = Color3.fromRGB(255, 255, 255)
AntiAnvilBreak.TextScaled = true
AntiAnvilBreak.TextSize = 14.000
AntiAnvilBreak.TextWrapped = true

fccolor12.Name = "fccolor12"
fccolor12.Parent = AntiAnvilBreak
fccolor12.BackgroundColor3 = Color3.fromRGB(153, 0, 0)
fccolor12.BorderColor3 = Color3.fromRGB(0, 0, 0)
fccolor12.BorderSizePixel = 0
fccolor12.Position = UDim2.new(0, 0, 1, 0)
fccolor12.Size = UDim2.new(0, 84, 0, 2)

AutoThrow.Name = "AutoThrow"
AutoThrow.Parent = Tools
AutoThrow.BackgroundColor3 = Color3.fromRGB(0, 0, 0)
AutoThrow.BorderColor3 = Color3.fromRGB(0, 0, 0)
AutoThrow.BorderSizePixel = 0
AutoThrow.Position = UDim2.new(0.513000011, 0, 0.0460000001, 0)
AutoThrow.Size = UDim2.new(0, 84, 0, 25)
AutoThrow.Font = Enum.Font.SourceSans
AutoThrow.Text = "AutoThrowAnvil"
AutoThrow.TextColor3 = Color3.fromRGB(255, 255, 255)
AutoThrow.TextScaled = true
AutoThrow.TextSize = 14.000
AutoThrow.TextWrapped = true

fccolor14.Name = "fccolor14"
fccolor14.Parent = AutoThrow
fccolor14.BackgroundColor3 = Color3.fromRGB(153, 0, 0)
fccolor14.BorderColor3 = Color3.fromRGB(0, 0, 0)
fccolor14.BorderSizePixel = 0
fccolor14.Position = UDim2.new(0, 0, 1, 0)
fccolor14.Size = UDim2.new(0, 84, 0, 2)

orbitheight.Name = "orbitheight"
orbitheight.Parent = Tools
orbitheight.BackgroundColor3 = Color3.fromRGB(56, 56, 56)
orbitheight.BackgroundTransparency = 0.600
orbitheight.BorderColor3 = Color3.fromRGB(0, 0, 0)
orbitheight.BorderSizePixel = 0
orbitheight.Position = UDim2.new(0.0179999992, 0, 0.200000003, 0)
orbitheight.Size = UDim2.new(0, 84, 0, 25)
orbitheight.Font = Enum.Font.SourceSans
orbitheight.PlaceholderColor3 = Color3.fromRGB(79, 79, 79)
orbitheight.PlaceholderText = "orbitheight"
orbitheight.Text = ""
orbitheight.TextColor3 = Color3.fromRGB(131, 131, 131)
orbitheight.TextScaled = true
orbitheight.TextSize = 14.000
orbitheight.TextWrapped = true

orbitradius.Name = "orbitradius"
orbitradius.Parent = Tools
orbitradius.BackgroundColor3 = Color3.fromRGB(56, 56, 56)
orbitradius.BackgroundTransparency = 0.600
orbitradius.BorderColor3 = Color3.fromRGB(0, 0, 0)
orbitradius.BorderSizePixel = 0
orbitradius.Position = UDim2.new(0.263000011, 0, 0.200000003, 0)
orbitradius.Size = UDim2.new(0, 84, 0, 25)
orbitradius.Font = Enum.Font.SourceSans
orbitradius.PlaceholderColor3 = Color3.fromRGB(79, 79, 79)
orbitradius.PlaceholderText = "orbitradius"
orbitradius.Text = ""
orbitradius.TextColor3 = Color3.fromRGB(131, 131, 131)
orbitradius.TextScaled = true
orbitradius.TextSize = 14.000
orbitradius.TextWrapped = true

orbitspeed.Name = "orbitspeed"
orbitspeed.Parent = Tools
orbitspeed.BackgroundColor3 = Color3.fromRGB(56, 56, 56)
orbitspeed.BackgroundTransparency = 0.600
orbitspeed.BorderColor3 = Color3.fromRGB(0, 0, 0)
orbitspeed.BorderSizePixel = 0
orbitspeed.Position = UDim2.new(0.513000011, 0, 0.200000003, 0)
orbitspeed.Size = UDim2.new(0, 84, 0, 25)
orbitspeed.Font = Enum.Font.SourceSans
orbitspeed.PlaceholderColor3 = Color3.fromRGB(79, 79, 79)
orbitspeed.PlaceholderText = "orbitspeed"
orbitspeed.Text = ""
orbitspeed.TextColor3 = Color3.fromRGB(131, 131, 131)
orbitspeed.TextScaled = true
orbitspeed.TextSize = 14.000
orbitspeed.TextWrapped = true

LowPP.Name = "LowPP"
LowPP.Parent = Tools
LowPP.BackgroundColor3 = Color3.fromRGB(0, 0, 0)
LowPP.BorderColor3 = Color3.fromRGB(0, 0, 0)
LowPP.BorderSizePixel = 0
LowPP.Position = UDim2.new(0.760368407, 0, 0.19600004, 0)
LowPP.Size = UDim2.new(0, 84, 0, 25)
LowPP.Font = Enum.Font.SourceSans
LowPP.Text = "LowPP"
LowPP.TextColor3 = Color3.fromRGB(255, 255, 255)
LowPP.TextScaled = true
LowPP.TextSize = 14.000
LowPP.TextWrapped = true

fccolor15.Name = "fccolor15"
fccolor15.Parent = LowPP
fccolor15.BackgroundColor3 = Color3.fromRGB(153, 0, 0)
fccolor15.BorderColor3 = Color3.fromRGB(0, 0, 0)
fccolor15.BorderSizePixel = 0
fccolor15.Position = UDim2.new(0, 0, 1, 0)
fccolor15.Size = UDim2.new(0, 84, 0, 2)

AnvilDrone.Name = "AnvilDrone"
AnvilDrone.Parent = Tools
AnvilDrone.BackgroundColor3 = Color3.fromRGB(0, 0, 0)
AnvilDrone.BorderColor3 = Color3.fromRGB(0, 0, 0)
AnvilDrone.BorderSizePixel = 0
AnvilDrone.Position = UDim2.new(0.0209999997, 0, 0.367000014, 0)
AnvilDrone.Size = UDim2.new(0, 84, 0, 25)
AnvilDrone.Font = Enum.Font.SourceSans
AnvilDrone.Text = "AnvilDrone"
AnvilDrone.TextColor3 = Color3.fromRGB(255, 255, 255)
AnvilDrone.TextScaled = true
AnvilDrone.TextSize = 14.000
AnvilDrone.TextWrapped = true

fccolor13.Name = "fccolor13"
fccolor13.Parent = AnvilDrone
fccolor13.BackgroundColor3 = Color3.fromRGB(153, 0, 0)
fccolor13.BorderColor3 = Color3.fromRGB(0, 0, 0)
fccolor13.BorderSizePixel = 0
fccolor13.Position = UDim2.new(0, 0, 1, 0)
fccolor13.Size = UDim2.new(0, 84, 0, 2)

Global.Name = "Global"
Global.Parent = Tabs
Global.BackgroundColor3 = Color3.fromRGB(16, 16, 16)
Global.BackgroundTransparency = 0.200
Global.BorderColor3 = Color3.fromRGB(0, 0, 0)
Global.BorderSizePixel = 0
Global.Size = UDim2.new(0, 380, 0, 240)

LagServer.Name = "LagServer"
LagServer.Parent = Global
LagServer.BackgroundColor3 = Color3.fromRGB(0, 0, 0)
LagServer.BorderColor3 = Color3.fromRGB(0, 0, 0)
LagServer.BorderSizePixel = 0
LagServer.Position = UDim2.new(0.0210526325, 0, 0.0458333343, 0)
LagServer.Size = UDim2.new(0, 84, 0, 25)
LagServer.Font = Enum.Font.SourceSans
LagServer.Text = "LagServer"
LagServer.TextColor3 = Color3.fromRGB(255, 255, 255)
LagServer.TextScaled = true
LagServer.TextSize = 14.000
LagServer.TextWrapped = true

fccolor16.Name = "fccolor16"
fccolor16.Parent = LagServer
fccolor16.BackgroundColor3 = Color3.fromRGB(153, 0, 0)
fccolor16.BorderColor3 = Color3.fromRGB(0, 0, 0)
fccolor16.BorderSizePixel = 0
fccolor16.Position = UDim2.new(0, 0, 1, 0)
fccolor16.Size = UDim2.new(0, 84, 0, 2)

Misc.Name = "Misc"
Misc.Parent = Tabs
Misc.BackgroundColor3 = Color3.fromRGB(16, 16, 16)
Misc.BackgroundTransparency = 0.200
Misc.BorderColor3 = Color3.fromRGB(0, 0, 0)
Misc.BorderSizePixel = 0
Misc.Size = UDim2.new(0, 380, 0, 240)
Misc.Visible = false

Keybinds.Name = "Keybinds"
Keybinds.Parent = Tabs
Keybinds.BackgroundColor3 = Color3.fromRGB(16, 16, 16)
Keybinds.BackgroundTransparency = 0.200
Keybinds.BorderColor3 = Color3.fromRGB(0, 0, 0)
Keybinds.BorderSizePixel = 0
Keybinds.Size = UDim2.new(0, 380, 0, 240)
Keybinds.Visible = false

GlobalB.Name = "GlobalB"
GlobalB.Parent = Tabs
GlobalB.BackgroundColor3 = Color3.fromRGB(0, 0, 0)
GlobalB.BorderColor3 = Color3.fromRGB(0, 0, 0)
GlobalB.BorderSizePixel = 0
GlobalB.Position = UDim2.new(0.400000006, 0, 0.88163656, 0)
GlobalB.Size = UDim2.new(0, 76, 0, 28)
GlobalB.Font = Enum.Font.SourceSans
GlobalB.Text = "Global"
GlobalB.TextColor3 = Color3.fromRGB(255, 255, 255)
GlobalB.TextScaled = true
GlobalB.TextSize = 14.000
GlobalB.TextWrapped = true

KeybindsB.Name = "KeybindsB"
KeybindsB.Parent = Tabs
KeybindsB.BackgroundColor3 = Color3.fromRGB(0, 0, 0)
KeybindsB.BorderColor3 = Color3.fromRGB(0, 0, 0)
KeybindsB.BorderSizePixel = 0
KeybindsB.Position = UDim2.new(0.800000012, 0, 0.88163656, 0)
KeybindsB.Size = UDim2.new(0, 76, 0, 28)
KeybindsB.Font = Enum.Font.SourceSans
KeybindsB.Text = "Keybinds"
KeybindsB.TextColor3 = Color3.fromRGB(255, 255, 255)
KeybindsB.TextScaled = true
KeybindsB.TextSize = 14.000
KeybindsB.TextWrapped = true

MainB.Name = "MainB"
MainB.Parent = Tabs
MainB.BackgroundColor3 = Color3.fromRGB(0, 0, 0)
MainB.BorderColor3 = Color3.fromRGB(0, 0, 0)
MainB.BorderSizePixel = 0
MainB.Position = UDim2.new(0, 0, 0.88163656, 0)
MainB.Size = UDim2.new(0, 76, 0, 28)
MainB.Font = Enum.Font.SourceSans
MainB.Text = "Main"
MainB.TextColor3 = Color3.fromRGB(255, 255, 255)
MainB.TextScaled = true
MainB.TextSize = 14.000
MainB.TextWrapped = true

MiscB.Name = "MiscB"
MiscB.Parent = Tabs
MiscB.BackgroundColor3 = Color3.fromRGB(0, 0, 0)
MiscB.BorderColor3 = Color3.fromRGB(0, 0, 0)
MiscB.BorderSizePixel = 0
MiscB.Position = UDim2.new(0.600000024, 0, 0.88163656, 0)
MiscB.Size = UDim2.new(0, 76, 0, 28)
MiscB.Font = Enum.Font.SourceSans
MiscB.Text = "Misc"
MiscB.TextColor3 = Color3.fromRGB(255, 255, 255)
MiscB.TextScaled = true
MiscB.TextSize = 14.000
MiscB.TextWrapped = true

ToolsB.Name = "ToolsB"
ToolsB.Parent = Tabs
ToolsB.BackgroundColor3 = Color3.fromRGB(0, 0, 0)
ToolsB.BorderColor3 = Color3.fromRGB(0, 0, 0)
ToolsB.BorderSizePixel = 0
ToolsB.Position = UDim2.new(0.200000003, 0, 0.88163656, 0)
ToolsB.Size = UDim2.new(0, 76, 0, 28)
ToolsB.Font = Enum.Font.SourceSans
ToolsB.Text = "Tools"
ToolsB.TextColor3 = Color3.fromRGB(255, 255, 255)
ToolsB.TextScaled = true
ToolsB.TextSize = 14.000
ToolsB.TextWrapped = true

--[[
scripts]]
-- antifling

local antifling = false

local p = game:GetService("Players").LocalPlayer
local c = p.Character or p.CharacterAdded:Wait()

local function gw(o) return o:FindFirstChild("ConnectedWeld") end
local function ic(w) return w and w.Part1 and w.Part1:IsDescendantOf(p.Character) end
local function d(o) 
    local w = gw(o) 
    if ic(w) then 
        o:Destroy() 
    end 
end

workspace.DescendantAdded:Connect(function(o)
    if not antifling then return end
    if o.Name == "Stabler" then
        task.spawn(function()
            if gw(o) or o:WaitForChild("ConnectedWeld", 10) then 
                d(o) 
            end
        end)
    end
end)

local function mp(p) return p:IsA("BasePart") and p.Name ~= "HumanoidRootPart" end
local function mm(p) p.Massless = true end
local function ma(c) 
    for _, v in ipairs(c:GetDescendants()) do 
        if mp(v) then 
            mm(v) 
        end 
    end 
end

local function ga(c) return c:FindFirstChild("ArmAngleChange") end
local function cf()
    return CFrame.new(0.999999583, 0.650959253, 0.0507530943,
        0.994099438, 0.0974220186, 0.0476996154,
        -0.0791255683, 0.952069402, -0.295470744,
        -0.074198693, 0.289953023, 0.954160273)
end
local function sa(c) 
    local e = ga(c) 
    if e then 
        e:FireServer(cf()) 
    end 
end

local loopActive = false

local function loop()
    if loopActive then return end
    loopActive = true
    while antifling and c and p.Character == c do
        ma(c)
        sa(c)
        task.wait(0.2)
    end
    loopActive = false
end

p.CharacterAdded:Connect(function(nc)
    c = nc
    if antifling then
        task.spawn(loop)
    end
end)


-- antianvil
local antianvil = false

RunService.Heartbeat:Connect(function()
    if not antianvil then return end
    if plr.Parent == nil then return end
    for _, v in pairs(workspace:GetChildren()) do
        if v:IsA("BasePart") and v.Name == "Anvil" and v:FindFirstChild("Script") then
            local scriptValue = v.Script:FindFirstChild("Value")
            if scriptValue and scriptValue.Value ~= plr then
                plr.Character.Picking:FireServer(v, Vector3.new(math.huge, -math.huge, math.huge))
                task.wait(0.1)
                plr.Character.PuttingDown:FireServer()
            end
        end
    end
end)

-- antispinner
local antispinner = false

RunService.Heartbeat:Connect(function()
    if antispinner then
        for _, v in next, plr.Character:GetChildren() do
            if v:IsA("BasePart") then
                v.CustomPhysicalProperties = propy
            end
        end
    else
        for _, v in next, plr.Character:GetDescendants() do
            pcall(function()
                if v:IsA("BasePart") then
                    v.CustomPhysicalProperties = PhysicalProperties.new(0.3, 0.2, 0, 0.2, 0.2)
                end
            end)
        end
    end
end)


-- fake accs
local fakeaccs = false

local function applyFakeAccs()
    while fakeaccs do
        for _, v in next, plr.Character:GetChildren() do
            if v:IsA("Accessory") and v:FindFirstChild("Handle") and v.Name ~= "FakeAcc" then
                local clone = v:Clone()
                v:Destroy()
                clone.Name = "FakeAcc"
                clone.Parent = plr.Character
            end
        end

        if plr.Character and plr.Character:FindFirstChild("HumanoidRootPart") and plr.Character:FindFirstChild("Head") then
            for _, v in next, plr.Character:GetChildren() do
                if v:IsA("BasePart") then
                    v.CustomPhysicalProperties = propy
                end
            end
        end

        task.wait(0.5)
    end
end

--antiragdoll
local antiragdoll = false

RunService.Heartbeat:Connect(function()
    if not antiragdoll or not plr.Character then return end
    local char = plr.Character

    pcall (function()
        if char:FindFirstChild("Ragdoll") and char.Ragdoll.Value then
            char.GetUpEvent:FireServer()
        end
    end)

    for _, v in next, char:GetChildren() do
        if v.Name == "Stabler" or v.Name == "VelocityDamage" or v.Name == "GetPicked"
        or v.Name == "ArmAngleUpdate" or v.Name == "ArmAngle" then
            v:Destroy()
        end
    end
end)
-- antivoid
local antivoid = false

plr.CharacterAdded:Connect(function()
    task.wait(0.5)
    if antivoid then
        workspace.FallenDestroyHeight = 0/0
    end
end)

-- fling aura
local flingAura = false

RunService.Heartbeat:Connect(function()
    if not flingAura or not plr.Character or not plr.Character:FindFirstChild("HumanoidRootPart") then return end

    local hrp = plr.Character.HumanoidRootPart

    for _, v in ipairs(game.Players:GetPlayers()) do
        if v ~= plr and v.Character and v.Character:FindFirstChild("HumanoidRootPart") then
            local otherHRP = v.Character.HumanoidRootPart
            if (hrp.Position - otherHRP.Position).Magnitude < 10 then
                pcall(function()
                    plr.Character.Picking:FireServer(otherHRP, Vector3.new(math.huge, -math.huge, math.huge))
                    task.wait(0.1)
                    plr.Character.PuttingDown:FireServer()
                end)
            end
        end
    end
end)

-- lfp
local flingTextBox = fling
local loopflingTextBox = loopfling
local isLoopFlingActive = false
local loopConnections = {}   
-- lfp v2
local isFlingV2Looping = false
local flingV2LoopConnections = {}  
local isHiddenV2Active = false


-- autorespawn
local run = game:GetService("RunService")
local vim = game:GetService("VirtualInputManager")
local enb = true

local function r()
	pcall(function()
		local b = plr.PlayerGui:WaitForChild("DeathMenu", 5):WaitForChild("Frame", 5):WaitForChild("Button", 5):WaitForChild("TextButton", 5)
		b.Position = UDim2.new(0, 0, 0, 0)
		b.Size = UDim2.new(1, 0, 1, 0)
		b.Text = ''
		b.BackgroundTransparency = 1
		b.ZIndex = 2^31 - 1
		local s = Instance.new("ScreenGui", game.CoreGui)
		s.IgnoreGuiInset = true
		s.ZIndexBehavior = Enum.ZIndexBehavior.Sibling
		b.Parent = s
		local x = b.AbsolutePosition.X + b.AbsoluteSize.X / 2
		local y = b.AbsolutePosition.Y + b.AbsoluteSize.Y / 2
		vim:SendMouseButtonEvent(x, y, 0, true, game, 0)
		vim:SendMouseButtonEvent(x, y, 0, false, game, 0)
		task.delay(0.5, function() s:Destroy() end)
	end)
end

local function c()
	if enb then
		run.RenderStepped:Wait()
		r()
	end
end

plr.CharacterAdded:Connect(c)

-- toolstab full
--[[only oneshoot
]]
local UserInputService = game:GetService("UserInputService")
local char = plr.Character or plr.CharacterAdded:Wait()
local head = char:WaitForChild("Head")
local torso = char:FindFirstChild("Torso") or char:FindFirstChild("UpperTorso")
local anvils = {}
local orbitrad = 3.4
local orbitspeed = 2.2
local headoffset = 1.6
local vel = -9e37
local cm = nil
local anvilOrbitEnabled = false
local lowPPEnabled = false

game.Workspace.FallenPartsDestroyHeight = 0/0

local function AddAnv(anvil)
	table.insert(anvils, anvil)
	anvil.Parent = workspace
	anvil.CanCollide = false
	anvil.Anchored = false
	anvil.CustomPhysicalProperties = PhysicalProperties.new(0, 0, 0, 0, 0)
	anvil.Velocity = (anvil.Position - head.Position).Unit * vel
end

local function FindAnvil()
	anvils = {}
	for _, v in pairs(workspace:GetChildren()) do
		if v:IsA("BasePart") and v.Name == "Anvil" and v:FindFirstChild("Script") and v.Script:FindFirstChild("Value") and v.Script.Value.Value == plr then
			AddAnv(v)
		end
	end
end

local function Positions()
	if #anvils == 0 or not torso then return end
	if cm ~= "orbit" and cm ~= "pen" then return end

	local time = tick() * orbitspeed
	local angleStep = (2 * math.pi) / #anvils

	if cm == "orbit" then
		for i, anvil in ipairs(anvils) do
			local angle = time + (i - 1) * angleStep
			local x = math.cos(angle) * orbitrad
			local z = math.sin(angle) * orbitrad
			local pos = head.Position + Vector3.new(x, headoffset, z)
			anvil.Position = pos
			anvil.CFrame = CFrame.new(pos, head.Position)
			anvil.Velocity = (anvil.Position - head.Position).Unit * vel
		end
	elseif cm == "pen" then
		local look = torso.CFrame.LookVector
		local right = torso.CFrame.RightVector
		local shaftBase = torso.Position + look * 0.5
		local shaftY = torso.Position.Y - 1.8

		for i, anvil in ipairs(anvils) do
			local pos
			if i == 1 then
				pos = Vector3.new(
					shaftBase.X - 0.9 * right.X,
					shaftY,
					shaftBase.Z - 0.9 * right.Z
				)
			elseif i == 2 then
				pos = Vector3.new(
					shaftBase.X + 0.9 * right.X,
					shaftY,
					shaftBase.Z + 0.9 * right.Z
				)
			else
				local shaftIndex = i - 2
				local shaftPos = shaftBase + look * (shaftIndex * 1.2)
				pos = Vector3.new(shaftPos.X, shaftY, shaftPos.Z)
			end
			anvil.Position = pos
			anvil.CFrame = CFrame.new(pos, pos + look)
			anvil.Velocity = look * vel
		end
	end
end

game:GetService("RunService").Heartbeat:Connect(Positions)

local function CharAdded(newChar)
	char = newChar
	head = char:WaitForChild("Head")
	torso = char:FindFirstChild("Torso") or char:FindFirstChild("UpperTorso")
	FindAnvil()
end

plr.CharacterAdded:Connect(CharAdded)

workspace.ChildAdded:Connect(function(c)
	if c:IsA("BasePart") and c.Name == "Anvil" then
		AddAnv(c)
	end
end)

coroutine.wrap(function()
	while true do
		FindAnvil()
		task.wait()
	end
end)()
--[[ others of oneshoot]]
-- autoanvilthrow
local anvilEnabled = false
local anvilThread
local characterConnection

local function stopAutoThrow()
    anvilEnabled = false
    if anvilThread then
        anvilThread:Disconnect()
        anvilThread = nil
    end
end

local function activateAnvil()
    if not anvilEnabled then return end

    local c = 0
    repeat 
        RunService.RenderStepped:Wait()
        c = c + 1
    until (plr.Character 
        and plr.Character:FindFirstChild("HumanoidRootPart") 
        and plr:FindFirstChild("Backpack") 
        and plr.Backpack:FindFirstChild("Anvil")) 
        or c >= 200

    if c >= 200 then return end

    local tool = plr.Backpack.Anvil
    tool.Parent = plr.Character
    task.wait(0.1)
    tool:Activate()

    if not plr.Character:FindFirstChild("Anvil") then return end

    local function throwLoop()
        while anvilEnabled and plr.Character and plr.Character:FindFirstChild("Anvil") do
            plr.Character.Anvil.send:FireServer(
                plr.Character.HumanoidRootPart.CFrame.p + Vector3.new(0, -1e8, 0)
            )
            task.wait(1)
            tool.Parent = plr.Backpack
            task.wait(30)
            if not anvilEnabled or not plr.Backpack:FindFirstChild("Anvil") then break end
            tool.Parent = plr.Character
            task.wait(0.1)
            tool:Activate()
        end
    end

    anvilThread = RunService.Heartbeat:Connect(throwLoop)
end

characterConnection = plr.CharacterAdded:Connect(function()
    if anvilEnabled then
        activateAnvil()
    end
end)

if plr.Character then
    activateAnvil()
end
--[[
Toggle , Button , Textbox]]



local toggleStates = {}

function settoggle(button, colorFrame)
    return function(callback)
        toggleStates[button] = false
        button.MouseButton1Click:Connect(function()
            toggleStates[button] = not toggleStates[button]
            if toggleStates[button] then
                colorFrame.BackgroundColor3 = Color3.fromRGB(0, 170, 0)
            else
                colorFrame.BackgroundColor3 = Color3.fromRGB(153, 0, 0)
            end
            if callback then callback(toggleStates[button]) end
        end)
    end
end

function setbutton(button)
    return function(callback)
        button.MouseButton1Click:Connect(function()
            if callback then callback() end
        end)
    end
end

function settextbox(textbox)
    return function(callback)
        textbox.FocusLost:Connect(function(enterPressed)
            if enterPressed and callback then
                callback()
            end
        end)
    end
end

settoggle(Antifling, fccolor)(function(state)
    antifling = state
    if antifling then
        task.spawn(loop)
    end
end)


settoggle(AntiAnvil, fccolor2)(function(state)
    antianvil = state
end)

settoggle(FakeAccs, fccolor3)(function(state)
    fakeaccs = state
    if fakeaccs then
        task.spawn(applyFakeAccs)
    end
end)

settoggle(AntiSpinner, fccolor4)(function(state)
    antispinner = state
end)

settoggle(AntiRagdoll, fccolor5)(function(state)
    antiragdoll = state
end)

setbutton(HackMovement)(function()
    print("HackMovement clicked")
end)

setbutton(ClearLoop)(function()
    for _, conn in ipairs(loopConnections) do
        if conn then conn:Disconnect() end
    end
    loopConnections = {}

    for _, conn in ipairs(flingV2LoopConnections) do
        if conn then conn:Disconnect() end
    end
    flingV2LoopConnections = {}

    plr.Character.PuttingDown:FireServer()
end)


settoggle(AntiVoid, fccolor7)(function(state)
    antivoid = state
    workspace.FallenDestroyHeight = antivoid and 0/0 or -500
end)

settoggle(FlingAura, fccolor8)(function(state)
    flingAura = state
    if not state and plr.Character and plr.Character:FindFirstChild("Picked") and plr.Character.Picked.Value then
        plr.Character.PuttingDown:FireServer()
    end
end)

settoggle(AutoRespawn, fccolor9)(function(state)
    enb = state
end)

settoggle(Hiddenv2, fccolor10)(function(state)
    isHiddenV2Active = state
end)

settoggle(AntiVelocity, fccolor1)(function(state)
    print("AntiVelocity toggled:", state)
end)

settoggle(AnvilOrbit, fccolor11)(function(state)
	anvilOrbitEnabled = state
	if anvilOrbitEnabled then
		cm = "orbit"
	elseif not lowPPEnabled then
		cm = nil
	end
end)

settoggle(AntiAnvilBreak, fccolor12)(function(state)
    print("AntiAnvilBreak toggled:", state)
end)

settoggle(AutoThrow, fccolor14)(function(state)
    anvilEnabled = state

    if state then
        activateAnvil()
    else
        stopAutoThrow()
    end
end)

settoggle(LowPP, fccolor15)(function(state)
	lowPPEnabled = state
	if lowPPEnabled then
		cm = "pen"
	elseif not anvilOrbitEnabled then
		cm = nil
	end
end)

settoggle(AnvilDrone, fccolor13)(function(state)
    print("AnvilDrone toggled:", state)
end)

settoggle(LagServer, fccolor16)(function(state)
    print("LagServer toggled:", state)
end)

settextbox(flingTextBox)(function()
    local input = flingTextBox.Text
    flingTextBox.Text = ""

    local targetPlayer = findplr(input)
    if not targetPlayer or not targetPlayer.Character then return end

    local conn = RunService.Heartbeat:Connect(function()
        local hrp = targetPlayer.Character and targetPlayer.Character:FindFirstChild("HumanoidRootPart")
        if hrp then
            for i = 1, 4 do
                plr.Character.Picking:FireServer(hrp, Vector3.new(math.huge, math.huge, math.huge))
            end
            plr.Character.PuttingDown:FireServer()
        end
    end)

    table.insert(loopConnections, conn)
end)

settextbox(loopflingTextBox)(function()
    local input = loopflingTextBox.Text
    loopflingTextBox.Text = ""

    local targetPlayer = findplr(input)
    if not targetPlayer then return end

    if loopConnection then
        loopConnection:Disconnect()
        loopConnection = nil
    end

    isLoopFlingActive = true
    loopConnection = RunService.Heartbeat:Connect(function()
        if not isLoopFlingActive then return end

        local targetPart = targetPlayer.Character and targetPlayer.Character:FindFirstChild("HumanoidRootPart")
        if targetPart then
            plr.Character.Picking:FireServer(targetPart, Vector3.new(math.huge, -math.huge, math.huge))
            task.wait(0.1)
            plr.Character.PuttingDown:FireServer()
        end
    end)
end)

settextbox(flingv2)(function()
    local input = flingv2.Text
    flingv2.Text = ""

    local targetPlayer = findplr(input)
    if not targetPlayer or not targetPlayer.Character then return end

    local model = targetPlayer.Character
    local armch = model:FindFirstChild("ArmAngleChange")
    if armch then
        if isHiddenV2Active then
            armch:FireServer(CFrame.new(
                math.random(-999, 99999),
                math.random(-999, 99999),
                math.random(-900, 99999),
                math.random(), math.random(), math.random(),
                math.random(), math.random(), math.random(),
                math.random(), math.random(), math.random()
            ))
        else
            armch:FireServer(CFrame.new(
                -math.huge, math.huge, -3,
                0, 0.01, 0.1,
                0, 0, 0,
                0, 0, 1
            ))
        end
    end
end)

settextbox(loopflingv2)(function()
    local input = loopflingv2.Text
    loopflingv2.Text = ""

    local targetPlayer = findplr(input)
    if not targetPlayer or not targetPlayer.Character then return end

    local conn = RunService.Heartbeat:Connect(function()
        local model = targetPlayer.Character
        local armch = model:FindFirstChild("ArmAngleChange")
        if armch then
            if isHiddenV2Active then
                armch:FireServer(CFrame.new(
                    math.random(-999, 99999),
                    math.random(-999, 99999),
                    math.random(-999, 99999),
                    math.random(), math.random(), math.random(),
                    math.random(), math.random(), math.random(),
                    math.random(), math.random(), math.random()
                ))
            else
                armch:FireServer(CFrame.new(
                    -math.huge, math.huge, -3,
                    0, 0.01, 0.1,
                    0, 0, 0,
                    0, 0, 1
                ))
            end
        end
    end)

    table.insert(flingV2LoopConnections, conn)
end)

settextbox(anvilkill)(function()
end)


local allTabs = {Main, Tools, Global, Misc, Keybinds}

local function openTab(tab)
    for _, t in pairs(allTabs) do
        t.Visible = false
    end
    tab.Visible = true
end

setbutton(MainB)(function()
    openTab(Main)
end)

setbutton(ToolsB)(function()
    openTab(Tools)
end)

setbutton(GlobalB)(function()
    openTab(Global)
end)

setbutton(MiscB)(function()
    openTab(Misc)
end)

setbutton(KeybindsB)(function()
    openTab(Keybinds)
end)
